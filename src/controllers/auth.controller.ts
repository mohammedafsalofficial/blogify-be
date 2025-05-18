import { registerUserService } from "@/services/auth.service";
import { UserPayload } from "@/types/auth.types";
import { Request, Response } from "express";
import { DatabaseError } from "pg";

export const registerUser = async (req: Request<{}, {}, UserPayload>, res: Response): Promise<void> => {
  try {
    const user = await registerUserService(req.body);

    res.status(201).json({
      message: "User registered successfully.",
      user,
    });
  } catch (error: unknown) {
    if (error instanceof DatabaseError && error.code === "23505") {
      res.status(400).json({ message: "Registration failed.", error: "Email already exists" });
    } else {
      console.error("Unexpected error during registration:", error);
      res.status(500).json({ message: "Something went wrong. Please try again later" });
    }
  }
};
