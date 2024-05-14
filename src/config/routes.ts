interface NavigationRoute {
	href: string;
	label: string;
}

export const mainNavigationRoutes: Array<NavigationRoute> = [
	{
		href: '/nosotros',
		label: 'Nosotros',
	},
	{
		href: '/servicios',
		label: 'Servicios',
	},
	{
		href: '/portafolio',
		label: 'Portafolio',
	},
	{
		href: '/contacto',
		label: 'Contacto',
	},
];
