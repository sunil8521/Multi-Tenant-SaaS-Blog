import { Queue } from "bullmq";
import { createRedisConnection } from "../../redis.js";

// const connection = await createRedisConnection();
const emailQueue = new Queue("email-queue");

export const sendEmailJob = async (data: {
  to: string;
  subject: string;
  html?: string;
}) => {
  await emailQueue.add("send-email", data, {
    attempts: 2,
    backoff: { type: "fixed", delay: 5000 },
    removeOnComplete: true,
    removeOnFail: true,
  });
  console.log(`📨 Queued email to ${data.to}`);
};
