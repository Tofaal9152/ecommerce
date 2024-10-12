"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { categories, subjects, authors } from "@/constant";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>লেখক</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3  gap-5 w-[30vw] h-[30vh]">
              {authors.map((author, index) => (
                <li key={index} className="row-span-3">
                  {author}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>বিষয়</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" bg-red-300 grid grid-cols-3  gap-5 w-[30vw] h-[30vh]">
              {subjects.map((subject, index) => (
                <div key={index}>
                  {subject}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {categories.map((category, index) => (
          <NavigationMenuItem key={index}>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {category}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
