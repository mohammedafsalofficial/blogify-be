import express, { Application } from "express";
import authRoutes from "@/routes/auth.routes";

const app: Application = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
