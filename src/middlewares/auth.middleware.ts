import { registerSchema } from "@/schema/auth.schema";
import { NextFunction, Request, Response } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ message: "Validation Error", errors: result.error.flatten().fieldErrors });
    return;
  }

  next();
};
