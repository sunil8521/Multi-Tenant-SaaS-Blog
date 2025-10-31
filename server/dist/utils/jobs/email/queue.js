import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
const sqs = new SQSClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
const queueUrl = process.env.SQS_QUEUE_URL;
export const sendEmailJob = async (data) => {
    try {
        const messageBody = JSON.stringify({
            to: data.to,
            subject: data.subject,
            html: data.html,
            timestamp: new Date().toISOString(),
        });
        const command = new SendMessageCommand({
            QueueUrl: queueUrl,
            MessageBody: messageBody,
            MessageAttributes: {
                MessageType: { DataType: "String", StringValue: "email" },
                Priority: { DataType: "String", StringValue: "normal" },
            },
        });
        const result = await sqs.send(command);
        console.log(`📨 Queued email to ${data.to} (Message ID: ${result.MessageId})`);
        return result;
    }
    catch (error) {
        console.error("❌ Failed to queue email:", error);
        throw error;
    }
};
// import { Queue } from "bullmq";
//   import { createRedisConnection } from "../../redis.js";
//   const connection = await createRedisConnection();
//   const emailQueue = new Queue("email-queue");
//   export const sendEmailJob = async (data: {
//     to: string;
//     subject: string;
//     html?: string;
//   }) => {
//     await emailQueue.add("send-email", data, {
//       attempts: 2,
//       backoff: { type: "fixed", delay: 5000 },
//       removeOnComplete: true,
//       removeOnFail: true,
//     });
//     console.log(`📨 Queued email to ${data.to}`);
//   };
//# sourceMappingURL=queue.js.map