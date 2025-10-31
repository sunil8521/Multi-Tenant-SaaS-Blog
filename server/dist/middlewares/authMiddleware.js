import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.js";
import { TryCatch } from "./error.js";
import ErrorHandler from "../utils/errorHandler.js";
import prisma from "../db/client.js";
export const authMiddleware = TryCatch(async (req, res, next) => {
    // 1️⃣ Get BetterAuth session
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    if (!session || !session.user) {
        return next(new ErrorHandler(401, "Unauthorized"));
    }
    // 2️⃣ Extract user info
    const user = session.user;
    const email = user.email;
    // 3️⃣ Extract subdomain from Origin header
    const origin = req.headers.origin || "";
    let subdomain = null;
    if (origin) {
        try {
            const url = new URL(origin);
            const hostParts = url.hostname.split(".");
            // blogapp.tech => no subdomain
            // hulhal.blogapp.tech => "hulhal"
            if (hostParts.length > 2) {
                subdomain = hostParts[0];
            }
        }
        catch {
            return next(new ErrorHandler(400, "Invalid Origin header"));
        }
    }
    if (!subdomain) {
        return next(new ErrorHandler(400, "Missing or invalid subdomain"));
    }
    // 4️⃣ Check team membership
    const membership = await prisma.teamMember.findFirst({
        where: {
            user: { email },
            team: { subdomain },
        },
        select: {
            role: true,
            teamId: true,
            team: { select: { id: true, name: true, subdomain: true } },
        },
    });
    if (!membership) {
        return next(new ErrorHandler(403, "Access denied: Not part of this team"));
    }
    // 5️⃣ Attach info for later use
    req.user = user;
    req.role = membership.role;
    req.teamId = membership.teamId;
    req.teamName = membership.team.name;
    req.subdomain = subdomain;
    next();
});
//# sourceMappingURL=authMiddleware.js.map