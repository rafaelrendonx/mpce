'use client'

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const Navbar = () => {
  return (
    <div className="flex w-full shrink-0 items-center">

      <div className="flex w-full justify-center">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white text-sm font-medium px-4"
                href="#"
              >
                Servicios
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white text-sm font-medium px-4"
                href="/portafolio"
              >
                Portafolio
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white text-sm font-medium"
                href="#"
              >
                Contacto
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Navbar





