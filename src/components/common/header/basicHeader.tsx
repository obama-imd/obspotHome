import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { JSX } from "react";
import ObspotLogo from "../obspotLogo";
import LoginButton from "./loginButton";

export const navigationItems = [
  { label: "Rede", href: "rede" }, 
  { label: "Recursos Educacionais", href: "recursos-educacionais" },
  { label: "Observatório", href: "observatorio" },
  { label: "Sobre", href: "sobre" },
];

export default function NavigationBar(): JSX.Element {
  return (
    <nav className="
        flex w-full h-auto items-center justify-around
        max-w-100vw
      ">

      <ObspotLogo />

      <div className="
        flex items-center justify-center gap-20 mr-100
      ">
        
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="w-fit font-space text-2xl"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <LoginButton/>

      </div>

    </nav>
  );
}
