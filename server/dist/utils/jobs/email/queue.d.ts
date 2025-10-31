export interface EmailJob {
    to: string;
    subject: string;
    html: string;
}
export declare const sendEmailJob: (data: EmailJob) => Promise<import("@aws-sdk/client-sqs").SendMessageCommandOutput>;
//# sourceMappingURL=queue.d.ts.map