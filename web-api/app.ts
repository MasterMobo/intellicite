import express from "express"
import cors from "cors"
import { authenticateToken } from "./controller/authController";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import { connectMongoDB } from "./db/mongoConnect";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({ extended: true })
);

// Routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", authenticateToken, userRouter)

// Ininiate app
const start = async () => {
  try {
      await connectMongoDB();
      app.listen(3000, () =>
          console.log(`Listening on port 3000!`)
      );
  } catch (e) {
      console.log(e);
  }
};
start();