"use client";
import {
  ProjectCard,
  ProjectCardSkeleton,
} from "@/components/shared/ProjectCard";
import { useGetProjects } from "@/features/project/services/getProjects";
import { driveToImage } from "@/lib/utils";
import { Activity } from "react";

const ProjectSection = () => {
  const { data, isLoading } = useGetProjects({
    input: {
      isFeatured: true,
    },
  });

  console.log(data);
  return (
    <section className="container mx-auto space-y-12 px-4 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-[2rem] leading-none font-medium md:text-[3rem] lg:text-left lg:text-[5rem]">
          Projects.
        </h1>
        <h6 className="text-my-black/80 font-medium md:text-lg">
          A selection of my latest projects
        </h6>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
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
    </section>
  );
};

export default ProjectSection;
