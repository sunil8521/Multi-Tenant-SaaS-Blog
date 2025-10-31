import "dotenv/config";
import "./utils/jobs/email/worker.js"; // Start the email worker
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import prisma from "./db/client.js";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";

//route
import userRoutes from "./routes/user.routes.js";
import teamRoutes from "./routes/team.routes.js";
import postRoutes from "./routes/post.routes.js";

export const envMode = process.env.NODE_ENV;
const port: number = Number(process.env.PORT);
const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow server-side requests

      // Allow main + subdomains of blogapp.tech
      const allowedPattern =
        /^https?:\/\/([a-z0-9-]+\.)?blogapp\.tech(?::5173)?$/;

      if (allowedPattern.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin: " + origin));
      }
    },
    credentials: true, // ✅ Needed for cookies (BetterAuth sessions),
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    optionsSuccessStatus: 204,
  })
);
// app.use(morgan("dev"));

app.get("/", (req, res) => {

  res.send("Hello, World!");
});

// your routes here
app.all(/^\/api\/auth(?:\/.*)?$/, toNodeHandler(auth));
app.use("/api/user", userRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/post", postRoutes);

//404
app.get(/.*/, (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

async function startServer() {
  try {
    await prisma.$connect(); // Try connecting to the database
    console.log("\x1b[33mDatabase connected successfully!\x1b[0m");

    app.listen(port, "0.0.0.0", () => {
      console.log(
        `\x1b[33mServer is working on Port: ${port} in ${envMode} Mode.\x1b[0m`
      );
    });
  } catch (error) {
    console.error("\x1b[31mDatabase connection failed!\x1b[0m", error);
    process.exit(1);
  }
}
startServer();
app.use(errorMiddleware);
