import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";
import nodemailer from "nodemailer";


const sqs = new SQSClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const queueUrl = process.env.SQS_QUEUE_URL!;

// Email transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

transporter.verify((error) => {
  if (error) console.log("❌ Email configuration error:", error);
  else console.log("✅ Email server is ready to send messages");
});



(async function processEmailQueue() {
  console.log("🚀 SQS Email Worker started...");

  while (true) {
    try {
      const receiveCommand = new ReceiveMessageCommand({
        QueueUrl: queueUrl,
        MaxNumberOfMessages: 1,
        WaitTimeSeconds: 20,
        MessageAttributeNames: ["All"],
        VisibilityTimeout: 30,
      });

      const response = await sqs.send(receiveCommand);

      if (!response.Messages || response.Messages.length === 0) {
        console.log("⏳ No email messages in queue, waiting...");
        continue;
      }

      const message = response.Messages[0];
      const jobData = JSON.parse(message?.Body!);
      const { to, subject, html } = jobData;

      console.log(`📨 Processing email job for: ${to}`);

      await transporter.sendMail({
        from: `"SaaS App" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
      });

      console.log(`✅ Email sent to ${to}`);

      await sqs.send(
        new DeleteMessageCommand({
          QueueUrl: queueUrl,
          ReceiptHandle: message?.ReceiptHandle!,
        })
      );

      console.log(`🗑️ Message ${message?.MessageId} deleted from SQS`);
    } catch (error) {
      console.error("💥 SQS Worker Error:", error);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  }
})();






