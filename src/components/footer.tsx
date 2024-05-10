import Link from 'next/link';
import Image from 'next/image';

import { FacebookIcon, InstagramIcon, MapPin } from 'lucide-react';

import { mpceAddress } from '@/lib/constants';

import logo from '@/../public/images/logos/mpce-siglas.svg';
import whatsappIcon from '@/../public/whatsapp-white-icon.svg';

export const Footer = () => {
	return (

		<footer className='bg-mbceYellow/90 flex min-h-[10vh] items-center relative'>
			
			<div className='absolute w-full z-10'>
				
				<div className='flex items-center lg:container lg:pl-4 lg:pr-4 xl:pl-4 xl:pr-4 2xl:pl-0 2xl:pr-0'>

					{/* Copy right */}
					<div className='basis-1/2 text-[10px] pl-5 2xl:pl-0'>
						<p className='text-white sm:text-xs md:text-sm lg:text-base'>
							© 2024 Mantenimiento, Proyectos y Construcción Electromecánica
						</p>
					</div>

					{/* Socials */} 
					<div className='flex flex-col basis-1/2 pr-5 2xl:pr-0'>
						<ul className='text-white flex items-center justify-end gap-5'>
							<li>
								<Link className='flex items-center' href={`https://www.instagram.com/mpce.hmo/`}>
									<InstagramIcon />
								</Link>
							</li>
							<li>
								<Link className='flex items-center' href={'https://facebook.com/MpCe256/'}>
									<FacebookIcon />
								</Link>
							</li>
							<li>
								<Link className='flex items-center' href={'#'} >
									<Image width={25} height={25} src={whatsappIcon.src} alt='whatsapp'
									/>
								</Link>
							</li>
						</ul>

					</div>
				</div>

			</div>

		</footer>

	);
};
