import { dbConnection } from "./config/database";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth";
import path from "path";

const envFile = process.env.ENV_FILE || ".env";

const app = express();

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/auth", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("server is running..." + port);
});
