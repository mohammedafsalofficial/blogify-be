import { registerUser } from "@/controllers/auth.controller";
import { validateUserPayload } from "@/middlewares/auth.middleware";
import { registerUserSchema } from "@/schema/auth.schema";
import { Router } from "express";

const router = Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", validateUserPayload(registerUserSchema), registerUser);

export default router;
