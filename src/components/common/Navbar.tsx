"use client";
import {
  RESUME_DOWNLOAD_FILE_NAME,
  RESUME_DOWNLOAD_URL,
} from "@/constants/generalConstant";
import { cn } from "@/lib/utils";
import { CloudDownload, Code2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-3 z-10 w-full">
      <div className="container mx-auto flex h-16 w-full items-center justify-between rounded-full px-4 backdrop-blur-3xl backdrop:blur-xl md:h-18">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="bg-my-black rounded-full p-1 text-white">
            <Code2Icon className="stroke-3" />
          </span>{" "}
          <h1 className="text-lg font-semibold md:text-xl">Mezaaf.</h1>
        </Link>
        <div className="hidden items-center gap-4 sm:gap-6 md:flex lg:gap-8">
          {navItems.map((nav) => {
            const isActive = nav.href === pathname;
            return (
              <Link
                key={nav.name}
                href={nav.href}
                className={cn(
                  "hover:text-my-black text-muted-foreground flex items-center gap-2 font-medium transition-colors duration-300",
                  isActive && "text-my-black",
                )}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={RESUME_DOWNLOAD_URL}
            download={RESUME_DOWNLOAD_FILE_NAME}
            className={cn(
              buttonVariants(),
              "bg-my-black hidden rounded-full p-6 md:flex",
            )}
          >
            <CloudDownload />
            DOWNLOAD CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navItems = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "PROJECT",
    href: "/project",
  },
];
