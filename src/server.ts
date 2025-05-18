import "@/config/env";
import app from "@/app";
import { initDB } from "@/config/db";

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await initDB();

    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (err: unknown) {
    console.error("Failed to initialize DB:", err);
    process.exit(1);
  }
};

startServer();
