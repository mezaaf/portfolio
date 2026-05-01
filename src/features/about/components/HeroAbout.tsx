import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroAbout = () => {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-4 px-4 pt-12">
      <div className="col-span-full md:col-span-4">
        <Card className="bg-my-black text-my-white border-none shadow-none!">
          <CardHeader>
            <div className="bg-accent aspect-square overflow-hidden rounded-sm">
              <Image
                src={"/images/mezaaf.webp"}
                alt="Mezaaf"
                width={800}
                height={800}
                priority
                className="w-full object-cover object-center grayscale"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h1 className="text-3xl font-medium md:text-4xl xl:text-5xl">
              Marchenda Ezafuwandhana
            </h1>
            <h6>
              Fullstack Web Developer focused on developing web applications and
              growing in modern web technologies.
            </h6>
            <div className="flex flex-wrap gap-2">
              <Badge
                className="text-my-white px-4 py-2 text-lg"
                variant={"outline"}
              >
                Web Development
              </Badge>
              <Badge
                className="text-my-white px-4 py-2 text-lg"
                variant={"outline"}
              >
                Frontend Development
              </Badge>
              <Badge
                className="text-my-white px-4 py-2 text-lg"
                variant={"outline"}
              >
                Backend Development
              </Badge>
              <Badge
                className="text-my-white px-4 py-2 text-lg"
                variant={"outline"}
              >
                Problem Solving
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-full flex flex-col justify-between gap-4 md:col-span-8">
        <Card className="bg-my-grey-2/90 border-my-black/30">
          <CardContent className="space-y-4 py-8 md:space-y-8">
            <h1 className="text-[4rem] leading-none font-medium md:text-[6rem] lg:text-left lg:text-[8rem]">
              Fullstack Developer
            </h1>
            <p className="text-[1rem] md:text-[1.25rem]">
              I’m a Junior Fullstack Web Developer passionate about building
              functional and efficient web applications. I enjoy working across
              both frontend and backend, solving problems, and continuously
              improving my technical skills. My goal is to create reliable
              applications that are easy to use and provide a smooth user
              experience.
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="bg-my-grey-2/90 border-my-black/30 min-h-[calc(1/2*95%)] justify-center shadow-none">
            <CardContent className="flex flex-col justify-center gap-1">
              <h4 className="text-[2.5rem] font-medium md:text-[3rem]">10+</h4>
              <p className="text-[1rem]">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="bg-my-grey-2/90 border-my-black/30 min-h-[calc(1/2*95%)] justify-center shadow-none">
            <CardContent className="flex flex-col justify-center gap-1">
              <h4 className="text-[2.5rem] font-medium md:text-[3rem]">2+</h4>
              <p className="text-[1rem]">Years of Experience</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/contact">
            <Card className="bg-my-black text-my-white hover:bg-my-black/90 justify-center shadow-none transition-colors duration-300">
              <CardContent className="flex flex-col justify-center gap-1">
                <h4 className="flex items-center justify-between gap-2 text-[1rem] font-medium md:text-[1.5rem]">
                  Get in touch <ArrowRightIcon className="size-5 md:size-8" />
                </h4>
              </CardContent>
            </Card>
          </Link>
          <Link href="/projects">
            <Card className="bg-my-grey-2/90 hover:bg-my-grey-3 border-my-black/30 justify-center shadow-none transition-colors duration-300">
              <CardContent className="flex flex-col justify-center gap-1">
                <h4 className="flex items-center justify-between gap-2 text-[1rem] font-medium md:text-[1.5rem]">
                  See My Projects{" "}
                  <ArrowRightIcon className="size-5 md:size-8" />
                </h4>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
