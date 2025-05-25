"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon, SearchIcon, XIcon } from "../svg";
import ThemeToggler from "../theme/theme-toggler";
import { constnavLink } from "../data/navbar";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavButtonClick = () => {
    setMobileNav(!mobileNav);
    document.body.style.overflow = mobileNav ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        document.body.style.overflow = "auto";
        setMobileNav(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed z-50 top-0 width bg-background/75 backdrop-blur-sm">
        <div className="h-14 padding border rounded-t-md mt-2 flex items-center justify-between">
          <div className="flex items-end gap-2">
            <Button
              variant="ghost"
              size={"icon"}
              className="lg:hidden"
              onClick={mobileNavButtonClick}
            >
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
        </div>
      </header>
      <AnimatePresence mode="wait">
        {mobileNav && (
          <nav className="fixed z-50 top-0 inset-0 width py-2 bg-background/75 backdrop-blur-sm ">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="max-w-xs bg-background border rounded-md h-full flex flex-col"
            >
              <div className="flex items-center justify-between padding py-3 border-b">
                <p className="inline-flex text-xl font-light tracking-tighter leading-none">
                  Min.UI
                </p>
                <Button
                  variant="ghost"
                  size={"icon"}
                  className=""
                  onClick={mobileNavButtonClick}
                >
                  <XIcon />
                </Button>
              </div>
              <div className="padding h-full overflow-auto pt-6 pb-14 space-y-10 [mask-image:linear-gradient(to_top,transparent,black_10%)]   ">
                <NavBarItems mobileNavButtonClick={mobileNavButtonClick} />
              </div>
            </motion.div>
          </nav>
        )}
      </AnimatePresence>
    </>
  );
};

export const NavBarItems = ({
  mobileNavButtonClick,
}: {
  mobileNavButtonClick?: () => void;
}) => {
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <>
      {constnavLink.map(({ list: originalList, name, reversed }, index) => {
        const sortedList = reversed
          ? [...originalList].sort((a, b) => a.label.localeCompare(b.label))
          : originalList;

        return (
          <div key={index}>
            <h4 className="font-medium">{name}</h4>
            <div className="flex flex-col space-y-2 mt-4">
              {sortedList.map(({ label, link }, idx) => (
                <Button
                  key={idx}
                  variant={"link"}
                  className="justify-start"
                  disabled={pathname === link}
                  onClick={() => {
                    if (mobileNavButtonClick) {
                      mobileNavButtonClick();
                    }
                    push(link);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
