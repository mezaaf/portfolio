import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex min-h-[90vh] flex-col justify-center px-4">
      <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="w-full">
          <h1 className="text-center text-[4rem] leading-none font-medium md:text-[6rem] lg:text-left lg:text-[8rem]">
            Fullstack <br /> Developer
          </h1>
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
