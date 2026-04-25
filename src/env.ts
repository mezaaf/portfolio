import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Private Environment
    RESEND_API_KEY: z.string().min(1),
    GOOGLE_SERVICE_ACCOUNT_EMAIL: z.email().min(1),
    GOOGLE_PRIVATE_KEY: z.string().min(1),
    GOOGLE_SHEET_ID: z.string().min(1),
  },
  client: {
    //  Public Environtment
    NEXT_PUBLIC_BASE_URL: z.url().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,

    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
