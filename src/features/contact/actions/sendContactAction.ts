"use server";

import { sendContactEmail } from "@/email/sendContactEmail";
import { ContactFormSchema } from "../forms/contact";
import { ZodError } from "zod";

export async function sendContactAction(data: ContactFormSchema) {
  try {
    await sendContactEmail(data);

    return {
      success: true,
      statusText: "your message has been sent successfully",
    };
  } catch (error) {
    console.log("Error sending message: ", error);
    if (error instanceof ZodError) {
      return {
        success: false,
        statusText: error.message,
      };
    } else {
      return {
        success: false,
        statusText: "Your message failed to send",
      };
    }
  }
}
