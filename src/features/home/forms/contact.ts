import { z } from "zod";
export const contactFormSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  email: z.email(),
  message: z.string("Message is required").min(1, "Message is required"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
