"use client"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 p-4 border-b border-gray-200 border-solid">
      <Link href="/" className="pl-4">
      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row items-center justify-between text-2xl">
          your
        </div>
        <div className="flex flex-row items-center justify-between">
          <Image src="/logo.svg" width={25} height={25} alt="logo" /> 
          </div>
          <div className="flex flex-row items-center justify-between text-2xl">
            app
          </div>
      </div>
      </Link>
      <div className="flex flex-rowitems-center gap-4 pr-4">
        <Authenticated>
            <Link href="/dashboard"><Button variant="outline">Dashboard</Button></Link>
            <UserButton />
        </Authenticated>
      </div>
    </div>
  );
};

export default NavBar;
