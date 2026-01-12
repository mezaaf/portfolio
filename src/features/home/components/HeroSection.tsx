import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="overflow-hidden flex items-center justify-center pt-4 sm:pt-8 lg:pt-20 relative">
      <h1 className="w-full absolute px-4 sm:px-6 lg:px-8 text-4xl sm:text-7xl lg:text-[170px] font-extrabold tracking-tight lg:leading-45 text-center">
        I&apos;M A WEBSITE <br />
        <span
          data-outline="DEVELOPER"
          className="outline-hero-text relative inline-block"
        >
          DEVELOPER
        </span>
      </h1>
      <div className="min-h-[25vh] h-[30vh] lg:min-h-[80vh] lg:h-[90vh]">
        <Image
          src={"/images/mezaaf.webp"}
          alt="mezaaf-hero"
          width={4000}
          height={4000}
          className="grayscale h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
