import prisma from "../db/client.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import { auth } from "../lib/auth.js";
import { sendEmailJob } from "../utils/jobs/email/queue.js";
import { welcomeEmailTemplate } from "../utils/constants.js";
const ctx = await auth.$context;
export const CreateTeam = TryCatch(async (req, res, next) => {
    const { fullName, email, confirmPassword, jobTittle, teamName, subdomain, industry, } = req.body;
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
                subdomain,
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
    await sendEmailJob({
        to: email,
        subject: "Welcome to Our Team Management App!",
        html: welcomeEmailTemplate(teamName, subdomain, "http://localhost:3000", email, fullName),
    });
    // ✅ 5. Send response
    res.status(201).json({
        success: true,
        message: `Team "${result.teamData.name}" created successfully.`,
        subdomain,
    });
});
export const CheckSubdomin = TryCatch(async (req, res, next) => {
    const raw = req.query.subdomain;
    const subdomain = Array.isArray(raw) ? raw[0] : raw;
    if (!subdomain || typeof subdomain !== "string")
        return res.status(400).json({ exists: false });
    const team = await prisma.team.findUnique({
        where: { subdomain: subdomain.toLowerCase() },
        select: { id: true },
    });
    res.json({ exists: !!team });
});
//# sourceMappingURL=team.js.map