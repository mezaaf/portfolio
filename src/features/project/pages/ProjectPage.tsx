import { Metadata } from "next";
import ProjectList from "../components/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated collection of my projects—showcasing my approach to building modern, user-friendly web applications and my readiness to contribute to real-world projects.",
};

const ProjectPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-12 py-8 md:py-12">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl">
          Project Showcase
        </h1>
        <p className="text-center max-w-2xl">
          A curated collection of my projects—showcasing my approach to building
          modern, user-friendly web applications and my readiness to contribute
          to real-world projects.
        </p>
      </div>
      <ProjectList />
    </main>
  );
};

export default ProjectPage;
