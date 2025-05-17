import z from "zod";

export const registerUserSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name cannot exceed 100 characters")
    .refine((fullName) => /^[a-zA-Z\s-]+$/.test(fullName), {
      message: "Full name can only contains letters, spaces and hyphens",
    }),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password cannot exceed 100 characters")
    .refine((password) => /[A-Z]/.test(password), { message: "Password must contain at least one uppercase letter" })
    .refine((password) => /[a-z]/.test(password), { message: "Password must contain at least one lowercase letter" })
    .refine((password) => /[0-9]/.test(password), { message: "Password must contain at least one number" }),
});
