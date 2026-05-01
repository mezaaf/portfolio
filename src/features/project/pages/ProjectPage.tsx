import { Metadata } from "next";
import ProjectList from "../components/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated collection of my projects—showcasing my approach to building modern, user-friendly web applications and my readiness to contribute to real-world projects.",
};

const ProjectPage = () => {
  return (
    <main className="container mx-auto space-y-12 px-4 pt-12 md:pt-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-[2rem] leading-none font-medium md:text-[3rem] lg:text-[5rem]">
          Projects.
        </h1>
        <h6 className="text-my-black/80 max-w-4xl font-medium md:text-lg">
          A curated collection of my projects—showcasing my approach to building
          modern, user-friendly web applications and my readiness to contribute
          to real-world projects.
        </h6>
      </div>

      <ProjectList />
    </main>
  );
};

export default ProjectPage;
