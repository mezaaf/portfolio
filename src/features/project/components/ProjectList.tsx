import ProjectCard from "@/components/shared/ProjectCard";
import { projectsData } from "@/lib/data/projectsData";

const ProjectList = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      {projectsData.map((item, index) => (
        <ProjectCard key={`project-${index}-${item.title}`} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
