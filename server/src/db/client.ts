import { PrismaClient } from "../generated/prisma/client.js";

// Extend NodeJS global type to store Prisma instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use existing global in dev, or create a new instance
export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ["error", "warn"], // add "query" if you want query logging
  });

// Prevent multiple instances in development (hot reload)
if (process.env.NODE_ENV !== "PRODUCTION") {
  global.prisma = prisma;
}

export default prisma;
