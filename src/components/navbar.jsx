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

      <NavigationMenu>
        <NavigationMenuList className='space-x-5'>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex w-max items-center justify-center text-white font-medium hover:text-mbceYellow"
              href='/servicios'
            >
              Servicios
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex w-max items-center justify-center text-white font-medium hover:text-mbceYellow"
              href="/portafolio"
            >
              Portafolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex w-max items-center justify-center text-white font-medium hover:text-mbceYellow"
              href='/contacto'
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





