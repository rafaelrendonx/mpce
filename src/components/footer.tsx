import Link from 'next/link';
import Image from 'next/image';

import { FacebookIcon, InstagramIcon, MapPin } from 'lucide-react';

import { mpceAddress } from '@/lib/constants';

import logo from '@/../public/logo.svg';
import whatsappIcon from '@/../public/whatsapp-white-icon.svg';

export const Footer = () => {
	return (
		<footer className='bg-gray-700 flex items-center justify-center p-5'>
			<div className='flex flex-col gap-5'>
				{/* Logo & name */}
				<div className='flex flex-col items-center -space-y-5'>
					<Image
						src={logo}
						alt='MPCE Logo'
						width={100}
						height={100}
						priority
						className='md:size-32'
					/>
					<small className='text-white'>
						Mantenimiento, proyecto y construcción electrica
					</small>
				</div>

				{/* Address */}
				<div className='flex items-center'>
					<MapPin color='white' />
					<p className='text-white text-[10px] sm:text-xs md:text-sm lg:text-base text-justify'>
						{mpceAddress}
					</p>
				</div>

				{/* Socials */}
				<div>
					<ul className='text-white flex items-center justify-center gap-5'>
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
				<div>
					<p className='text-white text-[10px] sm:text-xs md:text-sm lg:text-base text-center'>
						© 2024 MPCE
					</p>
				</div>
			</div>
		</footer>
	);
};
