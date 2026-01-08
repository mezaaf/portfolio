const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center py-16 sm:py-18 lg:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <div>
          <h3 className="text-4xl font-extrabold text-muted-foreground">
            HELLO
          </h3>
          <h1 className="text-5xl font-extrabold">I&apos;M MEZAAF</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16">
          <div className="w-full flex flex-col gap-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl">
              Helping projects and ideas stand out in the digital era by
              building modern, user-friendly web applications. Together, we
              grow, learn, and create—no nonsense, always improving and staying
              up to date.
            </p>
          </div>
          <div className="w-full md:max-w-sm flex flex-col gap-8 sm:gap-12 lg:gap-16">
            <p className="leading-7">
              I&apos;m a passionate web developer who builds modern, scalable,
              and user-friendly web applications, combining clean UI with solid
              backend engineering to bring ideas to life.
            </p>
            <div className="self-end md:self-start w-32 h-32 md:h-45 md:w-45 rounded-full bg-primary flex items-center justify-center">
              <p className="text-center font-semibold">About Me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
