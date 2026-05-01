"use client";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Code2Icon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-3 z-10 w-full px-4">
      <div className="border-my-black/20 container mx-auto flex h-16 w-full items-center justify-between rounded-full border px-4 backdrop-blur-3xl backdrop:blur-xl md:h-18">
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
            href={"/contact"}
            className={cn(
              buttonVariants(),
              "bg-my-black hidden rounded-full p-6 text-lg md:flex md:text-xl xl:text-2xl",
            )}
          >
            Get in touch
          </Link>
          <Sheet>
            <SheetTrigger className="cursor-pointer md:hidden">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="bg-my-black min-w-full!">
              <SheetHeader className="hidden">
                <SheetTitle />
                <SheetDescription />
              </SheetHeader>
              <div className="flex h-full flex-col items-center justify-center gap-8">
                {navItems.map((nav) => {
                  const isActive = nav.href === pathname;
                  return (
                    <SheetClose key={nav.name} asChild>
                      <Link
                        href={nav.href}
                        className={cn(
                          "hover:text-my-white text-muted-foreground flex items-center gap-2 text-3xl font-medium transition-colors duration-300",
                          isActive && "text-my-white",
                        )}
                      >
                        {nav.name}
                      </Link>
                    </SheetClose>
                  );
                })}
                <Link
                  href={"/contact"}
                  className={cn(
                    buttonVariants(),
                    "bg-my-white text-my-black hover:bg-my-white/90! rounded-full p-6 text-lg md:text-xl xl:text-2xl",
                  )}
                >
                  Get in touch <ArrowRightIcon />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Project",
    href: "/projects",
  },
];
