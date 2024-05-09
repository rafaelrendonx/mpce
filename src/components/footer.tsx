import Link from 'next/link';
import Image from 'next/image';

import { FacebookIcon, InstagramIcon, MapPin } from 'lucide-react';

import { mpceAddress } from '@/lib/constants';

import logo from '@/../public/images/logos/mpce-siglas.svg';
import whatsappIcon from '@/../public/whatsapp-white-icon.svg';

export const Footer = () => {
	return (
		<footer className='bg-gray-700 flex items-center justify-center pb-5 px-5'>
			<div className='flex flex-col gap-5'>
				{/* Logo & name */}
				<div className='flex flex-col items-center -space-y-5'>
					<Image
						src={logo}
						alt='MPCE Logo'
						width={100}
						height={100}
						priority
						className='sm:size-32 md:size-40 lg:size-48'
					/>
					<small className='text-white text-center'>
						Mantenimiento, Proyectos y Construcción Electromecánica
					</small>
				</div>

				{/* Address */}
				<div className='flex items-center justify-between flex-col pt-5'>
					<MapPin color='white' />
					<p className='text-white text-[10px] sm:text-xs md:text-sm lg:text-base text-center pt-1 px-5'>
						{mpceAddress}
					</p>
				</div>

				{/* Socials */}
				<div className='pt-5'>
					<ul className='text-white flex items-center justify-center gap-16'>
						<li>
							<Link
								className='flex items-center gap-1'
								href={`https://www.instagram.com/mpce.hmo/`}
							>
								<InstagramIcon />
							</Link>
						</li>
						<li>
							<Link
								className='flex items-center gap-1'
								href={'https://facebook.com/MpCe256/'}
							>
								<FacebookIcon />
							</Link>
						</li>
						<li>
							<Link
								className='flex items-center gap-1'
								href={'#'}
							>
								<Image
									width={30}
									height={30}
									src={whatsappIcon.src}
									alt='whatsapp'
								/>
							</Link>
						</li>
					</ul>
				</div>

				{/* Copy right */}
				<div className='pt-5'>
					<p className='text-white text-[10px] sm:text-xs md:text-sm lg:text-base text-center'>
						© 2024 MPCE
					</p>
				</div>
			</div>
		</footer>
	);
};
