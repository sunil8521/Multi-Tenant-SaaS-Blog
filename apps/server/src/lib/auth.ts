import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@repo/db/client";
import errorHandler from "../utils/errorHandler.js";
import { createAuthMiddleware, APIError } from "better-auth/api";
import { checkUserTeamMembership } from "../utils/checkUserTeamMembership.js";
export const auth = betterAuth({
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path !== "/sign-in/email") {
        return;
      }
      const { email } = ctx.body;
      const origin = ctx.request?.headers.get("origin");
      if (!origin) {
        throw new APIError("BAD_REQUEST", {
          message:
            "Missing origin header. Please try signing in from the application or contact support if the problem persists.",
        });
      }
      const url = new URL(origin);
      const hostname = url.hostname;
      const subdomain = hostname.split(".")[0]?.toLowerCase(); // Extract subdomain from host header

      if (!subdomain) {
        throw new APIError("BAD_REQUEST", {
          message:
            "Missing subdomain. Please try signing in from the application or contact support if the problem persists.",
        });
      }
      // Check if user exists and is member of the team for this subdomain
      const userTeamMembership = await checkUserTeamMembership(
        email,
        subdomain
      );

      if (!userTeamMembership) {
        throw new APIError("BAD_REQUEST", {
          message: "You don't have access to this team. Ask your team admin or contact support.",
        });
      }
    }),
  },

  user: {
    modelName: "User",
    fields: {
      name: "fullName",
    },
    additionalFields: {
      jobTitle: {
        type: "string",
        input: true,
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    // "http://localhost:5173", // Development frontend
    "http://blog.app:5173", // If frontend also runs on blog.app
    // "*.blogapp.tech", // For multi-tenant subdomains
    "http://*.blogapp.tech:5173", // Development subdomains with port
    // "https://*.blogapp.tech" // Production subdomains
  ],
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: ".blogapp.tech",
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
