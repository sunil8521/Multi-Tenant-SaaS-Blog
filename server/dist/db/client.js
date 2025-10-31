import { PrismaClient } from "../generated/prisma/client.js";
// Use existing global in dev, or create a new instance
export const prisma = global.prisma ??
    new PrismaClient({
        log: ["error", "warn"], // add "query" if you want query logging
    });
// Prevent multiple instances in development (hot reload)
if (process.env.NODE_ENV !== "PRODUCTION") {
    global.prisma = prisma;
}
export default prisma;
//# sourceMappingURL=client.js.map