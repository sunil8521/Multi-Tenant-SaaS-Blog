import prisma from "@repo/db/client";
import type { Request, Response, NextFunction } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import { hashedPassword } from "../utils/passwordHandle.js";

export const CreateTeam = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      fullName,
      email,
      confirmPassword,
      jobTittle,
      teamName,
      subdomain,
      industry,
    } = req.body;
    const hassPass = await hashedPassword(confirmPassword);
    const result = await prisma.$transaction(async (tx) => {
      const useData = await tx.user.create({
        data: {
          email,
          fullName,
          password: hassPass,
          jobTitle: jobTittle,
        },
      });
      const teamData = await tx.team.create({
        data: {
          name: teamName,
          subdomain: subdomain,
          category: industry,
          ownerId: useData.id,
        },
      });

      await tx.teamMember.create({
        data: {
          teamId: teamData.id,
          userId: useData.id,
          role: "ADMIN",
        },
      });
      return { teamData, useData };
    });

    res.status(201).json({
      success: true,
      message: `Team "${result.teamData.name}" created successfully.`,
      subdomain: subdomain,
    });
  }
);
export const CheckSubdomin = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const raw = req.query.subdomain;
    const subdomain = Array.isArray(raw) ? raw[0] : raw;
    if (!subdomain || typeof subdomain !== "string")
      return res.status(400).json({ exists: false });
    const team = await prisma.team.findUnique({
      where: { subdomain: subdomain.toLowerCase() },
      select: { id: true },
    });

    res.json({ exists: !!team });
  }
);
