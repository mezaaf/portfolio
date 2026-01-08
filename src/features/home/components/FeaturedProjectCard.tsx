import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProjectCard = () => {
  return (
    <Card className="w-full p-0">
      <CardContent className="flex flex-col-reverse lg:flex-row items-center gap-4 px-0 lg:pt-12">
        <div className="flex flex-col gap-6 lg:max-w-sm xl:max-w-lg p-4 sm:p-6 lg:p-0 lg:mx-6">
          <Badge>Web Application</Badge>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Pondok Ngujur - Official Islamic Boarding School Website
          </h1>
          <p>
            An official website for Pondok Ngujur designed to present
            institutional information clearly while providing a simple,
            user-friendly experience for visitors.
          </p>
          <Link
            href={"#"}
            className="self-end lg:self-start p-2 mb-0 lg:mb-6 xl:mb-0 bg-primary rounded-full w-fit group"
          >
            <ArrowRightIcon className="hover:-rotate-45 transition-transform duration-300 ease-in-out" />
          </Link>
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

export default FeaturedProjectCard;
