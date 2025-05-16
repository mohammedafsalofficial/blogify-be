import { configDotenv } from "dotenv";
import express, { Application } from "express";

configDotenv();

const app: Application = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
