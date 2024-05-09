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
    <>

      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex w-max items-center justify-center text-white font-medium pr-2"
              href="#"
            >
              Servicios
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex w-max items-center justify-center text-white font-medium px-8"
              href="/portafolio"
            >
              Portafolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex w-max items-center justify-center text-white font-medium"
              href="#"
            >
              Contacto
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </>

  )
}

export default Navbar





