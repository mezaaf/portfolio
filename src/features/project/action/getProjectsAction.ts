"use server";

import { env } from "@/env";
import { googleSheetService } from "@/lib/google-sheets";
import { GetProjectsResponse } from "../services/getProjects";

export async function getProjectsAction() {
  try {
    const range = "Projects!A2:H1000";
    const result = await googleSheetService.spreadsheets.values.get({
      spreadsheetId: env.GOOGLE_SHEET_ID,
      range,
    });

    const rows = result.data.values;
    const mappedData: GetProjectsResponse = rows.map((row: string[]) => ({
      id: row[0],
      title: row?.[1] ?? "",
      category: row?.[2] ?? "",
      description: row?.[3] ?? "",
      imageUrl: row?.[4] ?? "",
      siteUrl: row?.[5] ?? "",
      githubUrl: row?.[6] ?? "",
      isFeatured: row?.[7] === "TRUE",
    }));
    return mappedData;
  } catch (error) {
    console.log("Error fetching project data: ", error);
    return null;
  }
}
