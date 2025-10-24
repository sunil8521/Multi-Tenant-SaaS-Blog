import prisma from "@repo/db/client";
import type { Request, Response, NextFunction } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});
const CreatePresignedUrl = async (key: string): Promise<string> => {
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
  });
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  return url;
};

export const CreatePost = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.file) {
      const { originalname, mimetype, size } = req.file;
    }
  }
); //TODO: handle create post logic

export const GetAllPost = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { subDomain } = req.params;
  }
); //TODO: handle get all post logic

export const GetPost = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
  }
); //TODO: handle get one post logic

export const UpdatePost = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
  }
); //TODO: handle update post logic

export const DeletePost = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
  }
); //TODO: handle delete post logic

export const UploadSinglePicture = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {}
); //TODO: handle upload single picture logic

export const PresignedUrl = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { filetype } = req.body;
    const filename = `${Date.now()}.${filetype}`;
    const url = await CreatePresignedUrl(filename);
    console.log(url);
    res.status(200).json({
      success: true,
      url,
      filename
    });
  }
); 
// https://blogapp0x.s3.us-east-1.amazonaws.com/loko%20-%20Edited.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYR3Q3UALBT5OLI3S%2F20251024%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251024T044804Z&X-Amz-Expires=3600&X-Amz-Signature=5ad5c1b336336c53ea3704033d9d07a91c97e5461961c0148543fb9c53d1a824&X-Amz-SignedHeaders=host&x-amz-checksum-crc32=AAAAAA%3D%3D&x-amz-sdk-checksum-algorithm=CRC32&x-id=PutObject