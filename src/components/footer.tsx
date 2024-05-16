import Link from 'next/link';
import Image from 'next/image';

import { FacebookIcon, InstagramIcon, MailIcon } from 'lucide-react';

import whatsappIcon from '@/../public/whatsapp-white-icon.svg';

export const Footer = () => {
	return (
		<footer className='bg-mbceYellow/90 flex min-h-[10vh] items-center relative'>
			<div className='absolute w-full z-10'>
				<div className='flex items-center lg:container lg:pl-4 lg:pr-4 xl:pl-4 xl:pr-4 2xl:pl-0 2xl:pr-0 text-white'>
					{/* Copy right */}
					<div className='basis-1/2 text-[10px] pl-5 2xl:pl-0'>
						<div className='text-xxxs xsm:text-xs md:text-sm lg:text-xba'>
							<p className='flex items-center'>©2024</p>
							<p>Mantenimiento, Proyectos y <br className='lg:hidden' /> Construcción Electromecánica </p>
						</div>
					</div>

					{/* Socials */}
					<div className='flex flex-col basis-1/2 pr-5 2xl:pr-0'>
						<ul className='flex items-center justify-end gap-3 xsm:gap-5'>
							<li>
								<Link
									className='flex items-center'
									href={`https://www.instagram.com/mpce.hmo/`}
								>
									<InstagramIcon />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center'
									href={'https://facebook.com/MpCe256/'}
								>
									<FacebookIcon />
								</Link>
							</li>
							<li>
								<Link
									className=''
									href={`https://wa.me/+526624669086?text=¡Hola!+Me+gustaría+información+de+un+servicio`}
								>
									<Image
										width={25}
										height={25}
										src={whatsappIcon.src}
										alt='whatsapp'
										className=''
									/>
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center'
									href={`mailto:administracion@mpce.com.mx?subject=Contacto desde página web&body=Me gustaría información de los servicios`}
								>
									<MailIcon />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
