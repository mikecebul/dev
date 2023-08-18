"use client";

import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

export default function MobileNavTrigger() {
  return (
    <>
      <Button variant="outline" size="icon">
        <Icons.OpenMenu />
      </Button>
    </>
  );
}
