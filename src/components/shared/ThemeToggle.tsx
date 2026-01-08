"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Button onClick={handleChangeTheme} size="icon-sm" variant="outline">
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
