'use client';

import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';

export const Navbar = () => {
	return (
		<div className='flex w-full justify-center px-3 lg:px-0'>
			<NavigationMenu>
				<NavigationMenuList className='space-x-5'>
					<NavigationMenuLink asChild>
						<Link
							className='text-white text-sm font-medium hover:text-mbceYellow'
							href='/nosotros'
						>
							Nosotros
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className='text-white text-sm font-medium hover:text-mbceYellow'
							href='/servicios'
						>
							Servicios
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className='text-white text-sm font-medium hover:text-mbceYellow'
							href='/portafolio'
						>
							Portafolio
						</Link>
					</NavigationMenuLink>

					<NavigationMenuLink asChild>
						<Link
							className='text-white text-sm font-medium hover:text-mbceYellow'
							href='/contacto'
						>
							Contacto
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild></NavigationMenuLink>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default Navbar;
