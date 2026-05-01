import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { GetProjectsResponse } from "@/features/project/services/getProjects";
import { cn } from "@/lib/utils";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "../ui/badge";

export const ProjectCard = ({
  imageUrl,
  category,
  title,
  description,
  siteUrl,
  githubUrl,
}: GetProjectsResponse[0]) => {
  return (
    <Card className="overflow-hidden bg-transparent px-0 pt-0 shadow-none! ring-0">
      <CardContent className="bg-my-black relative h-fit p-0">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          priority
          className={cn(
            "h-full w-full object-cover object-center grayscale hover:grayscale-0",
          )}
        />
        <Badge className="absolute top-4 left-4">{category}</Badge>
      </CardContent>
      <CardFooter className="flex h-full flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">{title}</h1>
          <p className="text-justify">{description}</p>
        </div>
        <div className="mt-2 flex w-full gap-4">
          {siteUrl && (
            <Link
              href={siteUrl}
              target="_blank"
              className="border-primary hover:bg-primary text-primary mb-0 w-fit self-end rounded-full border p-3 transition-colors duration-300 ease-in-out hover:text-white lg:mb-6 lg:self-start xl:mb-0"
            >
              <LinkIcon className="size-5" />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="border-primary hover:bg-primary text-primary mb-0 w-fit self-end rounded-full border p-3 transition-colors duration-300 ease-in-out hover:text-white lg:mb-6 lg:self-start xl:mb-0"
            >
              <FaGithub className="size-5" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-transparent px-0 pt-0 shadow-none! ring-0">
      <CardContent className="bg-my-black relative h-fit p-0">
        <Skeleton className="h-96 w-full" />
        <Skeleton className="absolute top-4 left-4 h-6 w-20 rounded-full" />
      </CardContent>
      <CardFooter className="flex h-full flex-col justify-between gap-2">
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="mt-2 flex w-full gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
};
