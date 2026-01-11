"use client";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { CloudDownload, Code2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../shared/ThemeToggle";
import { Button } from "../ui/button";
import {
  RESUME_DOWNLOAD_FILE_NAME,
  RESUME_DOWNLOAD_URL,
} from "@/constants/generalConstant";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const { isExtraSmallScreen, isSmallScreen } = useMobile();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full z-10 sticky top-0 h-16 sm:h-18 lg:h-20 flex items-center justify-center border-b border-primary backdrop-blur-3xl">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="bg-primary rounded-full p-1 text-white">
            <Code2Icon className="stroke-3" />
          </span>{" "}
          <h1 className="font-extrabold text-lg md:text-xl">Mezaaf</h1>
        </Link>
        <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
          {navItems.map((nav) => {
            const isActive = pathname === nav.href;
            return (
              <Link
                key={nav.name}
                href={nav.href}
                className={cn(
                  "flex items-center gap-2 hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300 ease-in-out",
                    isActive && "bg-primary font-semibold"
                  )}
                />{" "}
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Button
            size={
              mounted && (isSmallScreen || isExtraSmallScreen)
                ? "sm"
                : "default"
            }
            className="hidden md:flex font-semibold text-xs md:text-sm"
            asChild
          >
            <Link
              href={RESUME_DOWNLOAD_URL}
              download={RESUME_DOWNLOAD_FILE_NAME}
            >
              <CloudDownload />
              DOWNLOAD CV
            </Link>
          </Button>
          {mounted && <ThemeToggle />}
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
    href: "/#about",
  },
  {
    name: "PROJECT",
    href: "/projects",
  },
  {
    name: "CONTACT",
    href: "/#contact",
  },
];
