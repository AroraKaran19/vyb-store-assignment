import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").min(1, "Password is required"),
});

export const registerSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .min(1, "Password is required"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .min(1, "Username is required"),
});
