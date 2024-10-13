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
            <div className=" grid gap-3  p-6 max-h-[70vh] overflow-auto ">
              {authors.map((item, index) => (
                <div
                  className="p-2 rounded-md w-full hover:bg-slate-100 cursor-pointer text-sm"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>বিষয়</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" grid gap-3 max-w-[12rem] p-6 max-h-[70vh] overflow-auto ">
              {subjects.map((item, index) => (
                <div
                  className="p-2 rounded-md w-full hover:bg-slate-100 cursor-pointer text-sm"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {categories.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
