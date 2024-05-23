"use client";

import React from "react";

import { useScroll } from "ahooks";

import { cn } from "@/lib/utils";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useRouter } from "next/navigation";
import AvatarDiv from "../avatar";
import TooltipProvider from "../tooltip";

export const Navbar = () => {
  const scroll = useScroll(() => document);
  const router = useRouter();
  return (
    <header
      className={cn(
        " hover:shadow-lg shadow-md w-full sticky top-0 backdrop-blur transition-[background-color,border-width] border-x-0  flex justify-center z-10",
        (scroll?.top ?? 0) > 60
          && "bg-background/50 border-b border-border/50  hover:shadow-lg shadow-md ",
      )}
    >
      <div className="w-full flex justify-between items-center h-16 p-4 sm:p-8 md:max-w-screen-lg 2xl:max-w-screen-xl">
        <span
          className="ml-2 font-semibold text-primary text-3xl cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          DIYAuction
        </span>
        <div className=" flex justify-between items-center">
          <ConnectButton />
          <TooltipProvider text="Personal Center" className="mx-2">
            <AvatarDiv
              iconAttr={{ height: 25, width: 25 }}
              className="cursor-pointer text-[2rem] mx-2"
              onClick={() => {
                router.push("/personal");
              }}
            />
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
};
