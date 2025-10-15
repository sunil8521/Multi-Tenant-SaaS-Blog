import { Worker } from "bullmq";
import nodemailer from "nodemailer";
import IORedis from "ioredis";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});