"use client";

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

export function ColorModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.Sun className="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Icons.Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
            System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
