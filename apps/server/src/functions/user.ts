import type { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import prisma from "@repo/db/client";
import { generateInviteCode } from "../utils/inviteCodeGeneratae.js";
import { sendEmailJob } from "../utils/jobs/email/queue.js";
import { userInviteTemplate } from "../utils/constants.js";

export const getUserProfile = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    res
      .status(200)
      .json({ success: true, data: { ...req.user, role: req.role } });
  }
);

export const inviteUserToTeam = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, role, message } = req.body;
    const HOUR_48 = 48 * 60 * 60 * 1000;

    if (!email || !role) {
      return next(new ErrorHandler(400, "Please provide all required fields"));
    }
    const now = new Date();

    const existingInvite = await prisma.invite.findFirst({
      where: { email, teamId: req.teamId! },
    });
    if (existingInvite) {
      const totalTime =
        now.getTime() - new Date(existingInvite.createdAt).getTime();
      if (totalTime < HOUR_48) {
        return next(
          new ErrorHandler(
            400,
            "User is already invited within last 48 hours, try later"
          )
        );
      }
    }

    // // Check if the user is already a member of the team
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      const isMember = await prisma.teamMember.findFirst({
        where: {
          teamId: req.teamId!,
          userId: existingUser.id,
        },
      });
      if (isMember) {
        return next(
          new ErrorHandler(400, "User is already a member of the team")
        );
      }
    }

    // Create a new team invitation
    const code = generateInviteCode();

    const invitation = await prisma.invite.create({
      data: {
        email,
        token: code,
        invitedById: req.user!.id,
        teamId: req.teamId!,
        role,
      },
    });

    await sendEmailJob({
      to: email,
      subject: "You're invited to join a team!",
      html: userInviteTemplate(
        req.teamName!,
        req.subdomain!,
        `http://${req.subdomain!}.blogapp.tech:5173/join?c=${code}`
      ),
    });

    res
      .status(201)
      .json({ success: true, message: "User invited successfully" });
  }
);

export const verifyInviteToken = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body as { token?: string };

    // 1️⃣ Validate token presence
    if (!token) {
      return next(new ErrorHandler(400, "Invite token is required"));
    }

    // 2️⃣ Find invite
    const invite = await prisma.invite.findUnique({
      where: { token },
    });

    if (!invite) {
      return next(new ErrorHandler(404, "Invalid or expired invite token"));
    }

    // 3️⃣ Check expiration
    const HOUR_48 = 48 * 60 * 60 * 1000;
    const createdAt = new Date(invite.createdAt).getTime();
    const now = Date.now();

    if (now - createdAt > HOUR_48) {
      return next(new ErrorHandler(400, "Invite token has expired"));
    }

    // 4️⃣ Check if user already exists
    const user = await prisma.user.findUnique({
      where: { email: invite.email },
    });

    // 5️⃣ Response handling
    if (!user) {
      return res.status(200).json({
        success: true,
        signup: true,
        message: "Valid token, proceed to signup",
        data: {
          email: invite.email,
          teamId: invite.teamId,
          role: invite.role,
        },
      });
    }

    // User exists — direct them to join team
    return res.status(200).json({
      success: true,
      signup: false,
      message: "Valid token, proceed to join team",
      data: {
        email: invite.email,
        teamId: invite.teamId,
        role: invite.role,
      },
    });
  }
);

export const JoinTeam = TryCatch(
  async (req: Request, res: Response, Next: NextFunction) => {}
);
export const SignupAndJoinTeam = TryCatch(
  async (req: Request, res: Response, Next: NextFunction) => {}
);
