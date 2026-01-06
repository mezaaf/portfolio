import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Anton } from "next/font/google";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center min-h-[75vh]">
        <p className="">Hello there!👋, I&apos;m a Fullstack Developer</p>
        <h1
          className={cn(
            "relative text-center text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-12 sm:leading-16 lg:leading-20 text-primary",
            anton.className
          )}
        >
          TRANSFORMING <br /> <span className="text-accent">IDEAS</span> INTO
          REAL <span className="text-accent">WORLD</span> <br />
          <span className="flex items-center justify-center gap-4">
            <div className="h-10 md:h-16 aspect-square overflow-hidden bg-primary rotate-8 rounded-tr-xl rounded-bl-md">
              <Image
                src={"/images/mezaaf.png"}
                alt="mezaaf-hero"
                width={100}
                height={100}
                className="w-full h-full object-cover object-top scale-150 pt-0.5 md:pt-1.5 -rotate-3 grayscale"
              />
            </div>
            RESULTS
          </span>
          <Badge className="absolute top-5 left-1 sm:top-8 sm:left-1 lg:left-2 lg:text-xl px-3 sm:px-6 lg:px-8 -rotate-28">
            Code
          </Badge>
          <Badge className="absolute bg-accent text-primary top-6 right-3 lg:top-8 lg:right-6 lg:text-xl px-3 sm:px-6 lg:px-8 rotate-32">
            Story
          </Badge>
          <Badge className="absolute bottom-6 right-3 sm:bottom-10 sm:right-7 lg:bottom-14 lg:right-12 lg:text-xl px-3 sm:px-6 lg:px-8 -rotate-20">
            Beyound
          </Badge>
        </h1>
        <p className="max-w-xl text-center">
          I build modern, scalable, and user friendly web applications—combining
          clean UI design with solid backend engineering to bring ideas to life.
        </p>
        <Button size="lg" className="group rounded-full font-bold">
          Get in Touch{" "}
          <ArrowRightIcon className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out stroke-3" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
