export type Project = {
  category: string;
  title: string;
  description: string;
  siteUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
};

export const projectsData: Project[] = [
  {
    category: "Web Application",
    title: "Pondok Ngujur - Official Islamic Boarding School Website",
    description:
      "An official website for Pondok Ngujur designed to present institutional information clearly while providing a simple, user-friendly experience for visitors.",
    siteUrl: "https://www.pondokngujur.com",
    githubUrl: "",
    isFeatured: true,
  },
];
