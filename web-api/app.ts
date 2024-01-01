import express from "express"
import cors from "cors"
import { authenticateToken } from "./controller/authController";
import authRouter from "./routes/authRoutes";
import inputRouter from "./routes/inputRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", authenticateToken, inputRouter)

// Ininiate app
const start = async () => {
  app.listen(process.env.PORT, () =>
            console.log(`Listening on port ${process.env.PORT}!`)
        );
}

start()