import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import prisma from "@repo/db/client";

//route
import userRoutes from "./routes/user.routes.js"
import teamRoutes from "./routes/team.routes.js"
import postRoutes from "./routes/post.routes.js"


dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

app.use("/api/user",userRoutes)
app.use("/api/team",teamRoutes)
app.use("/api/post",postRoutes)

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

    app.listen(port, () => {
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
