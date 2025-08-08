"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-secondary shadow-md p-4">
      <Image src={"/logo.svg"} width={160} height={100} alt={"logo"} />
      <ul className="hidden md:flex gap-6">
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
          Dashboard
        </li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
          Questions
        </li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
          Upgrade
        </li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
          How It Works?
        </li>
      </ul>
      <UserButton />
    </header>
  );
}

export default Header;
