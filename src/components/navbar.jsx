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
        <NavigationMenuList>
          <NavigationMenuItem className="flex flex-row p-10">
            <Link href="/portafolio" legacyBehavior passHref>
              <NavigationMenu className=" text-white">
                Documentation
              </NavigationMenu>
            </Link>
            <Link href="/portafolio" legacyBehavior passHref>
              <NavigationMenu className=" text-white">
                Documentation
              </NavigationMenu>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
     
    </>
  )
}

export default Navbar