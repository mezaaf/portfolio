import { z } from "zod";
export const contactFormSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .trim()
    .refine(
      (value) =>
        !value || value === "" || /^(?:\+?62|0)8[1-9][0-9]{7,11}$/.test(value),
      {
        message: "Invalid phone number",
      },
    ),
  message: z.string("Message is required").min(1, "Message is required"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
