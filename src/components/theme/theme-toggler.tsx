"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../svg";
import { Button } from "../ui/button";

const ThemeToggler = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={className}
    >
      <SunIcon className=" absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-300" />
      <MoonIcon className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-300" />
    </Button>
  );
};

export default ThemeToggler;
