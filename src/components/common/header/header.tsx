import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { JSX } from "react";
import ObspotLogo from "../obspotLogo";

const navigationItems = [
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
        inline-flex items-center justify-center gap-10 mr-100
      ">
        
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="inline-flex items-start gap-2.5 px-[35px] py-5 relative flex-[0_0_auto] bg-black rounded-[14px] h-auto hover:bg-dark/90">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
            Login
          </span>
        </Button>

      </div>

    </nav>
  );
}
