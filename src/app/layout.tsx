import Link from 'next/link';
import Image from 'next/image';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import ResponsiveMenu from '@/components/responsivemenu';

import logo from '../../public/images/logos/mpce-siglas.svg';
import './globals.css';

import type { Metadata } from 'next';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: {
		template: 'MPCE | %s',
		default: 'MPCE | Mantenimiento, Proyectos y Construcción Electromecánica',
	},
	description: 'Mantenimiento, Proyectos y Construcción Electromecánica',
	keywords: [
		'MPCE',
		'Mantenimiento',
		'Proyectos',
		'Construcción',
		'Electromecánica',
		'Ingeniería',
		'Electricidad',
		'Electrónica',
		'Mecánica',
		'Automatización',
		'Control',
	],
	// TODO: Update the URL to the actual domain
	metadataBase: new URL('https://mpce.vercel.app/'),
	icons: [
		{
			url: '/favicon.ico',
		},
	],
	openGraph: {
		images: [
			{
				alt: 'MPCE Logo',
				width: 768,
				height: 500,
				url: '/logo.svg',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased relative flex flex-col', fontSans.variable,)}
			>
				<header className='absolute w-full z-10'>

					<div className='flex justify-between drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
						<Link href={'/'}>
							<Image src={logo} alt='MPCE Logo' width={100} height={100} className='sm:size-32 md:size-40 lg:size-48' priority />
						</Link>

						<div className='flex justify-end items-center px-2 sm:px-4 md:px-6 lg:px-8'>
				
							<div className='hidden md:flex'>
								<Navbar />
							</div>

							<div className='md:hidden'>
								<ResponsiveMenu />
							</div>
							
						</div>

					</div>

				</header>

				<div className='flex-1'>{children}</div>

				<Footer />

			</body>

		</html>
	);
}
