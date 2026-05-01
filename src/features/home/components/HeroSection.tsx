import { buttonVariants } from "@/components/ui/button";
import {
  RESUME_DOWNLOAD_FILE_NAME,
  RESUME_DOWNLOAD_URL,
} from "@/constants/generalConstant";
import { cn } from "@/lib/utils";
import { CloudDownload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex min-h-[90vh] flex-col justify-center p-4">
      <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex w-full flex-col items-center gap-8 md:gap-12 lg:items-start lg:gap-16">
          <h1 className="text-center text-[4rem] leading-none font-medium md:text-[6rem] lg:text-left lg:text-[8rem]">
            Fullstack <br /> Developer
          </h1>
          <div className="flex items-center gap-2">
            <Link
              href={RESUME_DOWNLOAD_URL}
              download={RESUME_DOWNLOAD_FILE_NAME}
              className={cn(
                buttonVariants(),
                "bg-my-black rounded-full p-6 text-lg md:flex md:text-xl xl:text-2xl",
              )}
            >
              <CloudDownload />
              Resume
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 md:gap-12 lg:items-end lg:gap-16">
          <div className="aspect-square h-[300px] w-[300px] overflow-hidden rounded-4xl md:aspect-3/4 md:h-[456px] md:w-[394px]">
            <Image
              src="/images/mezaaf-2.webp"
              alt="Hero Image"
              width={500}
              height={500}
              priority
              className="h-full w-full rotate-y-180 object-cover grayscale"
            />
          </div>
          <h5 className="max-w-xs text-center text-[1.25rem] leading-tight tracking-normal md:text-[1.5rem] lg:text-end">
            Hello, I&apos;m Mezaaf, a fullstack developer focused on creating
            user-friendly digital experiences.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
