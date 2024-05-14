import Link from 'next/link';
import Image from 'next/image';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { Navbar } from '@/components/navbar';
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
		title: 'MPCE',
		description: 'Mantenimiento, Proyectos y Construcción Electromecánica',
		url: 'https://mpce.vercel.app/',
		siteName: 'MPCE',
		images: [
			{
				alt: 'MPCE Logo',
				width: 768,
				height: 500,
				url: 'https://i.ibb.co/ggLdkWg/mpce.png',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased relative flex flex-col',
					fontSans.variable,
				)}
			>
				<header className='fixed w-full z-10 bg-white shadow-[0_0_30px_rgba(0,0,0,.2)]'>
					<div className='flex justify-between drop-shadow-2xl lg:container lg:pl-4 lg:pr-4 xl:pl-4 xl:pr-4 2xl:pl-0 2xl:pr-0 animate-fade-in-opacity transition-opacity'>
						<Link href={'/'}>
							<Image
								src={logo}
								alt='MPCE Logo'
								width={80}
								height={80}
								className='sm:size-24 md:size-28 lg:size-32'
								priority
							/>
						</Link>

						<div className='flex justify-end items-center px-2 sm:px-4 md:px-6 lg:px-8 2xl:pr-0'>
							<div className='hidden md:flex'>
								<Navbar />
							</div>

							<div className='md:hidden'>
								<ResponsiveMenu />
							</div>
						</div>
					</div>
				</header>

				{/* NOTA: Mantener siempre los padding tops iguales que los tamaños del logo para no ocultar contenido */}
				<div className='flex-1 pt-[80px] sm:pt-24 md:pt-28 lg:pt-32'>
					{children}
				</div>

				<Footer />
			</body>
		</html>
	);
}
