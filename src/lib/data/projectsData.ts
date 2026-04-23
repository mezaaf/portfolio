export type Project = {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
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
    imageUrl: "/images/projects/pondok-ngujur.png",
    siteUrl: "https://www.pondokngujur.com",
    githubUrl: "",
    isFeatured: true,
  },
  {
    category: "Web Application",
    title: "Benang Merah - Custom Printing Studio Profile",
    description:
      "A company profile website for Benang Merah, a custom printing studio, built to showcase services, portfolio, and brand identity while delivering a clean and user-friendly experience for potential clients.",
    imageUrl: "/images/projects/benang-merah.png",
    siteUrl: "https://benangmerah-phi.vercel.app",
    githubUrl: "",
    isFeatured: true,
  },
];
