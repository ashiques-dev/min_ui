import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { MenuIcon, SearchIcon } from "../svg";
import ThemeToggler from "../theme/theme-toggler";
import { navItemsList } from "../data/navbar";

export const Navbar = () => {
  return (
    <>
      <header className="fixed z-50 top-0 width bg-background/75 backdrop-blur-sm">
        <nav className="h-14 padding border rounded-t-md mt-2 flex items-center justify-between">
          <div className="flex items-end gap-2">
            <Button variant="ghost" size={"icon"} className="lg:hidden">
              <MenuIcon />
            </Button>
            <Link
              href={"/"}
              className="inline-flex text-2xl font-light tracking-tighter leading-none"
            >
              Min.UI
            </Link>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 ">
            <Button variant="outline">
              <SearchIcon /> search...
            </Button>
            <ThemeToggler />
          </div>
        </nav>
      </header>
    </>
  );
};



export const NavBarItems = () => {
  const sortedNavItems = [...navItemsList].sort((a, b) =>
    a.label.localeCompare(b.label)
  );
  return (
    <>
      {sortedNavItems.map(({ label, link }, index) => (
        <Link
          key={index}
          href={link}
          className={buttonVariants({ variant: "link" })}
        >
          {label}
        </Link>
      ))}
    </>
  );
};