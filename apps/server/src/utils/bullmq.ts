import { Queue } from "bullmq";
import { createRedisConnection } from "./redis.js";

const connection = await createRedisConnection();
export const emailQueue = new Queue("email-queue", { connection });
