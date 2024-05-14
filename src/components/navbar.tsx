'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { mainNavigationRoutes } from '@/config/routes';

import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className='flex w-full justify-center px-3 lg:px-0'>
			<NavigationMenu>
				<NavigationMenuList className='space-x-5'>
					{mainNavigationRoutes.map((route) => (
						<NavigationMenuLink
							asChild
							key={route.href}
						>
							<Link
								className={`text-black text-sm md:text-base font-medium hover:text-mbceYellow transition-colors ${
									pathname === route.href ? 'text-mbceYellow' : ''
								}`}
								href={route.href}
							>
								{route.label}
							</Link>
						</NavigationMenuLink>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
