import { Worker } from "bullmq";
import nodemailer from "nodemailer";
import { createRedisConnection } from "../../redis.js";

const connection = await createRedisConnection();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

 
const worker=new Worker(
  "email-queue",
  async (job) => {
    // console.log("Processing job:", job.id, job.data);
    const { to, subject, html } = job.data;
    await transporter.sendMail({ to, subject, html });
    console.log(`✅ Email sent to ${to}`);
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} has failed with error ${err.message}`);
});