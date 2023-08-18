"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import React from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./Icons";
import { ColorModeToggle } from "./ColorModeToggle";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.OpenMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">MikeCebul</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col pt-8 justify-between">
          <div>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "link" }), "")}
            >
              Home
            </Link>
          </div>

          <div className="p-8 flex justify-center">
            <ColorModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
