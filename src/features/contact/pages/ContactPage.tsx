import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <main className="container mx-auto flex flex-col justify-between gap-4 px-4 py-12 lg:flex-row lg:items-center">
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <h1 className="text-center text-[4rem] leading-none font-medium md:text-[6rem] lg:text-left lg:text-[8rem]">
          Get in <br /> Touch
        </h1>
        <p className="text-center text-[1.25rem] leading-tight tracking-normal md:text-[1.5rem] lg:text-start">
          Reach out if you have any questions or requests!
        </p>
      </div>
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
