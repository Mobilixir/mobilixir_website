import { z } from "zod";

export const BUDGETS = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"] as const;

/** Shared by the form (client) and the API route (server). */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email address").max(200),
  service: z.string().max(100).optional(),
  budget: z.enum(BUDGETS).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters")
    .max(5000, "Please keep the message under 5,000 characters"),
  // Spam traps: humans never see or fill `website`, and `startedAt` lets us
  // reject submissions made faster than a person could type.
  website: z.string().max(0).optional(),
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
