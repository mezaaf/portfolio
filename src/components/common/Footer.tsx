import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  return (
    <footer className="border-t-primary bg-my-black flex w-full py-4 md:py-6 xl:py-8">
      <section className="text-my-grey-1 container mx-auto flex w-full flex-col justify-between gap-8 px-4">
        <div className="flex w-full flex-col justify-between gap-6 lg:flex-row">
          <div className="w-full max-w-2xl space-y-4 pt-12 md:space-y-6 xl:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-my-grey-1 aspect-square h-[90px] w-[90px] overflow-hidden rounded-full lg:h-[150px] lg:w-[150px]">
                <Image
                  src={"/images/mezaaf.webp"}
                  alt="Mezaaf"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center grayscale"
                />
              </div>
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-lg font-bold md:text-xl xl:text-2xl">
                  Marchenda Ezafuwandhana
                </h1>
                <h3 className="text-my-grey-2 font-semibold md:text-lg xl:text-xl">
                  Fullstack Developer
                </h3>
              </div>
            </div>
            <h5 className="text-my-grey-2 md:text-lg xl:text-xl">
              Looking for a fullstack developer who builds fast and focuses on
              quality? Let’s talk.
            </h5>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 xl:gap-8">
              <Link
                href={"/contact"}
                className={cn(
                  buttonVariants(),
                  "bg-my-white text-my-black hover:bg-my-white! rounded-full p-8 text-xl transition-transform duration-300 ease-in-out hover:scale-98",
                )}
              >
                Contact Now
                <ArrowRightIcon />
              </Link>
              <Link
                href={"mailto:mezafuwandhana@gmail.com"}
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-my-white hover:text-my-white hover:bg-my-grey-1/5 rounded-full bg-transparent p-8 text-xl transition-transform duration-300 ease-in-out hover:scale-98",
                )}
              >
                Schedule a call
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:gap-6 xl:gap-8">
            <h1 className="text-[3rem] leading-tight md:text-[6rem] xl:text-[9rem]">
              Let’s build something meaningful.
            </h1>
            <h5 className="text-lg md:text-xl xl:text-2xl">
              Turning ideas into functional and user-friendly web applications.
            </h5>
          </div>
        </div>
        <div className="border-my-grey-2 flex flex-col-reverse justify-between gap-4 border-y py-4 md:flex-row md:items-center md:py-6 xl:py-8">
          <p>© {new Date().getFullYear()} Mezaaf. All rights reserved.</p>
          <div className="flex w-fit flex-col justify-center gap-4 md:flex-row md:items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="flex w-fit items-center justify-center gap-4">
            {socialList.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="size-6" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

const socialList = [
  {
    url: "https://github.com/mezaaf",
    icon: FaGithub,
  },
  {
    url: "https://instagram.com/mezaaf_",
    icon: AiFillInstagram,
  },
  {
    url: "https://www.tiktok.com/@mezaaf_25",
    icon: AiFillTikTok,
  },
  {
    url: "https://www.linkedin.com/in/marchendaezafuwandhana/",
    icon: FaLinkedin,
  },
];
