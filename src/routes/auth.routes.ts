import { validateRegister } from "@/middlewares/auth.middleware";
import { register } from "../controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post("/register", validateRegister, register);

export default router;
