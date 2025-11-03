import prisma from "../db/client.js";
import type { Request, Response, NextFunction } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import { auth } from "../lib/auth.js";
import { sendEmailJob } from "../utils/jobs/email/queue.js";
import { welcomeEmailTemplate } from "../utils/constants.js";

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

    // get better-auth context per-request
    const ctx = await auth.$context;

    // basic validation
    if (!fullName || !email || !confirmPassword || !teamName || !subdomain) {
      return next(new ErrorHandler(400, "Missing required fields"));
    }

    // ✅ Hash the password securely
    const hashedPass = await ctx.password.hash(confirmPassword);

    const result = await prisma.$transaction(async (tx) => {
      // ✅ 1. Create User
      const userData = await tx.user.create({
        data: {
          fullName,
          email,
          jobTitle: jobTittle,
        },
      });

      // ✅ 2. Create Account (BetterAuth compatible)
      await tx.account.create({
        data: {
          userId: userData.id,
          accountId: userData.id, // can reuse userId for "email" provider
          providerId: "credential",
          password: hashedPass, // hashed with bcrypt or argon2
        },
      });

      // ✅ 3. Create Team
      const teamData = await tx.team.create({
        data: {
          name: teamName,
          subdomain: subdomain.toLowerCase(),
          category: industry,
          ownerId: userData.id,
        },
      });

      // ✅ 4. Add User as ADMIN in TeamMember
      await tx.teamMember.create({
        data: {
          teamId: teamData.id,
          userId: userData.id,
          role: "ADMIN",
        },
      });

      return { teamData, userData };
    });

    // send welcome email (fire-and-forget)
    sendEmailJob({
      to: email,
      subject: "Welcome to Our Team Management App!",
      html: welcomeEmailTemplate(
        teamName,
        subdomain,
        "https://" + subdomain + ".sunilspace.me",
        email,
        fullName
      ),
    }).catch((err) => console.error("Email job enqueue failed", err));

    // ✅ 5. Send response
    res.status(201).json({
      success: true,
      message: `Team "${result.teamData.name}" created successfully.`,
      subdomain,
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
