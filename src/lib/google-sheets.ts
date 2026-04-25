import { env } from "@/env";

import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
});

export const googleSheetService = google.sheets({ version: "v4", auth });
