import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/data/projectsData";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({
  category,
  title,
  description,
  siteUrl,
  githubUrl,
}: Project) => {
  return (
    <Card className="w-full p-0 bg-neutral-200 dark:bg-neutral-800">
      <CardContent className="flex flex-col-reverse lg:flex-row items-center gap-4 px-0 lg:pt-12">
        <div className="flex flex-col gap-6 lg:max-w-sm xl:max-w-lg p-4 sm:p-6 lg:p-0 lg:mx-6">
          <Badge>{category}</Badge>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">{title}</h1>
          <p>{description}</p>
          <div className="flex items-center gap-2">
            {siteUrl && (
              <Link
                href={siteUrl}
                target="_blank"
                className="self-end lg:self-start p-3 mb-0 lg:mb-6 xl:mb-0 border border-primary hover:bg-primary rounded-full w-fit text-primary hover:text-white transition-colors duration-300 ease-in-out"
              >
                <LinkIcon className="size-5" />
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="self-end lg:self-start p-3 mb-0 lg:mb-6 xl:mb-0 border border-primary hover:bg-primary rounded-full w-fit text-primary hover:text-white transition-colors duration-300 ease-in-out"
              >
                <FaGithub className="size-5" />
              </Link>
            )}
          </div>
        </div>
        <div className="self-end">
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src="/images/projects/pondok-ngujur.png"
              alt="pondok-ngujur"
              width={1200}
              height={720}
              className="w-full h-full object-cover object-bottom-left"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
