"use client";
import {
  ProjectCard,
  ProjectCardSkeleton,
} from "@/components/shared/ProjectCard";
import { useGetProjects } from "../services/getProjects";
import { driveToImage } from "@/lib/utils";
import { Activity } from "react";

const ProjectList = () => {
  const { data, isLoading } = useGetProjects();
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
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
  );
};

export default ProjectList;
