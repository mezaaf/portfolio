"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ProjectCard,
  ProjectCardSkeleton,
} from "@/components/shared/ProjectCard";
import { useGetProjects } from "@/features/project/services/getProjects";
import { Activity } from "react";
import { driveToImage } from "@/lib/utils";

const ProjectSection = () => {
  const { data, isLoading } = useGetProjects({
    input: {
      isFeatured: true,
    },
  });
  return (
    <section
      id="project"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center justify-center pt-16 sm:pt-18 lg:pt-24"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Fetured Project
      </h1>
      <div className="w-full flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <Activity mode={isLoading ? "hidden" : "visible"}>
          {data?.map((item) => (
            <ProjectCard
              key={`project-${item.id}-${item.title}`}
              {...item}
              imageUrl={driveToImage(item.imageUrl)}
            />
          ))}
        </Activity>
        <Activity mode={!isLoading ? "hidden" : "visible"}>
          {Array.from({ length: 2 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </Activity>
      </div>
      <Button asChild>
        <Link href={"/projects"}>View All Projects</Link>
      </Button>
    </section>
  );
};

export default ProjectSection;
