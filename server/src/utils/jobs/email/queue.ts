import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqs = new SQSClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const queueUrl = process.env.SQS_QUEUE_URL!;

export interface EmailJob {
  to: string;
  subject: string;
  html: string;
}

export const sendEmailJob = async (data: EmailJob) => {
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
  } catch (error) {
    console.error("❌ Failed to queue email:", error);
    throw error;
  }
};







