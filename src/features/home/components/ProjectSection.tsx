import { Button } from "@/components/ui/button";
import FeaturedProjectCard from "./FeaturedProjectCard";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section
      id="project"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center py-16 sm:py-18 lg:py-24"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Fetured Project
      </h1>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <FeaturedProjectCard />
      </div>
      <Button asChild>
        <Link href={"/projects"}>View All Projects</Link>
      </Button>
    </section>
  );
};

export default ProjectSection;
