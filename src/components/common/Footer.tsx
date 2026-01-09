import Link from "next/link";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 md:py-6 border-t border-t-primary">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <p className="z-5 text-left text-primary-foreground">
          &copy; {new Date().getFullYear()} Mezaaf. All rights reserved
        </p>
        <div className="flex items-center gap-2">
          {socialList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.url}
                className="flex items-center gap-2 hover:text-primary"
                target="_blank"
              >
                <item.icon className="size-5" />
              </Link>
            );
          })}
        </div>
      </div>
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
