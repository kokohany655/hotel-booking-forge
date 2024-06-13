import { dbConnection } from "./config/database";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/auth", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("server is running..." + port);
});
