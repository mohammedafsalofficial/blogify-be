import { RegisterRequestBody } from "@/types/auth.types";
import { Request, Response } from "express";

export const register = (req: Request<{}, {}, RegisterRequestBody>, res: Response): void => {
  try {
    const { fullName, email } = req.body;
    res.status(201).json({
      message: "User registered successfully.",
      user: {
        fullName,
        email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Registration failed.", error });
  }
};
