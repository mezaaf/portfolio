import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center justify-center py-12 sm:py-16 lg:py-20">
        <p className="">Hello there!👋, I&apos;m a Web Developer</p>
        <h1
          className={cn(
            "text-center text-4xl md:text-7xl font-extrabold leading-10 sm:leading-16 lg:leading-20 tracking-tighter text-primary"
          )}
        >
          TRANSFORMING <br />{" "}
          <span className="block lg:hidden">IDEAS INTO REAL</span>
          <span className="w-full hidden lg:block">IDEAS INTO REAL WORLD</span>
          <span className="w-full flex items-center justify-center">
            <span className="block lg:hidden">WORLD</span>
            <div className="mx-2 h-8 md:h-16 aspect-square overflow-hidden bg-primary rotate-8 rounded-tr-xl rounded-bl-md">
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
