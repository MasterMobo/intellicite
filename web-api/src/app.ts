import "express-async-errors";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { authenticateToken } from "./controller/authController";
import { connectMongoDB } from "./db/mongoConnect";
import errorHandler from "./middlewares/errorHandler";

import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import searchRouter from "./routes/searchRoutes";

import env from "./config/env";
const { PORT } = env;

const app = express();

// Security
app.set("trust proxy", 1);
app.use(cors());
app.use(helmet());
app.use(
    rateLimit({
        windowMs: 10 * 60 * 1000, // 10 minutes
        max: 100, // Limit each IP to 100 requests every windowMS
    })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/search", searchRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authenticateToken, userRouter);

// Error handler
app.use(errorHandler);

// Ininiate app
const start = async () => {
    try {
        await connectMongoDB();
        app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
    } catch (e) {
        console.log(e);
    }
};
start();
