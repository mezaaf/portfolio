import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="container mx-auto grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-2">
      <Link
        href="/about"
        className="text-my-white relative flex min-h-96 w-full flex-col justify-between overflow-hidden rounded-lg bg-[url(/images/mezaaf-2.webp)] bg-cover bg-top p-6 grayscale-75 transition-transform duration-300 ease-in-out hover:scale-99 md:p-8"
      >
        <div className="w-full">
          <h1 className="text-my-black text-center text-[1rem] leading-none font-medium md:text-[2rem] lg:text-left lg:text-[3rem]">
            About Me
          </h1>
        </div>
        <div className="flex w-full justify-end">
          <h5 className="text-my-black flex items-center gap-2 text-[1rem] md:text-[1.25rem] xl:text-[1.5rem]">
            Read More <ArrowRightIcon />
          </h5>
        </div>
      </Link>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="bg-my-grey-2/90 border-my-black/30 justify-center shadow-none">
          <CardContent className="flex flex-col justify-center gap-1">
            <h4 className="text-[2.5rem] font-medium">Mezaaf</h4>
            <p className="text-my-black/80 text-[1rem] md:text-[1.25rem]">
              A fullstack developer who enjoys creating simple, user-friendly
              web experiences, focusing on clean design, solid functionality,
              and continuous growth.
            </p>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          <Card className="bg-my-grey-2/90 border-my-black/30 min-h-[calc(1/2*95%)] justify-center shadow-none">
            <CardContent className="flex flex-col justify-center gap-1">
              <h4 className="text-[2.5rem] font-medium">10+</h4>
              <p className="text-[1rem]">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="bg-my-grey-2/90 border-my-black/30 min-h-[calc(1/2*95%)] justify-center shadow-none">
            <CardContent className="flex flex-col justify-center gap-1">
              <h4 className="text-[2.5rem] font-medium">2+</h4>
              <p className="text-[1rem]">Years of Experience</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
