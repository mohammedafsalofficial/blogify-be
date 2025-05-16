import { configDotenv } from "dotenv";
import express, { Application } from "express";
import authRoutes from "./routes/auth.routes";

configDotenv();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
