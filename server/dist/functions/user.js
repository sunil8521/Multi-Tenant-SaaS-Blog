import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import prisma from "../db/client.js";
import { generateInviteCode } from "../utils/inviteCodeGeneratae.js";
import { sendEmailJob } from "../utils/jobs/email/queue.js";
import { userInviteTemplate } from "../utils/constants.js";
import { auth } from "../lib/auth.js";
import { teamMemberWelcomeTemplate } from "../utils/constants.js";
const ctx = await auth.$context;
export const getUserProfile = TryCatch(async (req, res, next) => {
    res
        .status(200)
        .json({ success: true, data: { ...req.user, role: req.role } });
});
export const inviteUserToTeam = TryCatch(async (req, res, next) => {
    const { email, role, message } = req.body;
    const HOUR_48 = 48 * 60 * 60 * 1000;
    if (!email || !role) {
        return next(new ErrorHandler(400, "Please provide all required fields"));
    }
    const now = new Date();
    const existingInvite = await prisma.invite.findFirst({
        where: { email, teamId: req.teamId },
    });
    if (existingInvite) {
        const totalTime = now.getTime() - new Date(existingInvite.createdAt).getTime();
        if (totalTime < HOUR_48) {
            return next(new ErrorHandler(400, "User is already invited within last 48 hours, try later"));
        }
    }
    // // Check if the user is already a member of the team
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        const isMember = await prisma.teamMember.findFirst({
            where: {
                teamId: req.teamId,
                userId: existingUser.id,
            },
        });
        if (isMember) {
            return next(new ErrorHandler(400, "User is already a member of the team"));
        }
    }
    // Create a new team invitation
    const code = generateInviteCode();
    const invitation = await prisma.invite.create({
        data: {
            email,
            token: code,
            invitedById: req.user.id,
            teamId: req.teamId,
            role,
        },
    });
    await sendEmailJob({
        to: email,
        subject: "You're invited to join a team!",
        html: userInviteTemplate(req.teamName, req.subdomain, `http://${req.subdomain}.blogapp.tech:5173/join?c=${code}`),
    });
    res
        .status(201)
        .json({ success: true, message: "User invited successfully" });
});
export const verifyInviteToken = TryCatch(async (req, res, next) => {
    const { token } = req.body;
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
});
export const JoinTeam = TryCatch(async (req, res, Next) => { });
export const SignupAndJoinTeam = TryCatch(async (req, res, Next) => {
    const { email, fullName, jobTitle, password, role, teamId } = req.body;
    if (!email || !fullName || !password || !teamId || !role) {
        return Next(new ErrorHandler(400, "Please provide all required fields"));
    }
    const team = await prisma.team.findUnique({ where: { id: teamId } });
    if (!team) {
        return Next(new ErrorHandler(404, "Team does not exist"));
    }
    const hashedPass = await ctx.password.hash(password);
    const result = await prisma.$transaction(async (tx) => {
        const userData = await tx.user.create({
            data: {
                fullName,
                email,
                jobTitle: jobTitle,
            },
        });
        await tx.account.create({
            data: {
                userId: userData.id,
                accountId: userData.id,
                providerId: "credential",
                password: hashedPass,
            },
        });
        await tx.teamMember.create({
            data: {
                teamId: teamId,
                userId: userData.id,
                role: role,
            },
        });
        return { userData };
    });
    await sendEmailJob({
        to: email,
        subject: "Welcome to Our Team Management App!",
        html: teamMemberWelcomeTemplate(fullName, team.name, `http://${team.subdomain}.localhost:3000`),
    });
    res.status(201).json({
        success: true,
        message: `Sign-up successfully. please login to continue.`,
    });
});
//# sourceMappingURL=user.js.map