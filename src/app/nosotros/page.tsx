import Image from 'next/image';

import { Playfair_Display, Roboto_Slab } from 'next/font/google';

import { cn, shimmerPlaceholderGenerator } from '@/lib/utils';

import { ContactForm } from '@/components/contact-form';

import firstImage from '@/../public/about-us-1.svg';
import secondImage from '@/../public/about-us-2.svg';
import thirdImage from '@/../public/about-us-3.svg';

const titleFont = Playfair_Display({ subsets: ['latin'] });

const paragraphFont = Roboto_Slab({ subsets: ['latin'] });

const NosotrosPage = async () => {
	return (
		<main className='space-y-10'>
			{/*
			<section className='h-[400px] bg-portafolio-banner bg-fixed bg-center bg-cover bg-no-repeat'>
				<div className='size-full text-center flex flex-col items-center justify-center gap-5 text-white bg-black/70'>
					<h1 className='text-2xl xl:text-4xl font-semibold'>Nosotros</h1>

					<div className='flex flex-col items-center justify-center gap-5'>
						<div className='!w-14 border-t border-mbceYellow' />
						<div className='!w-20 border-t border-mbceYellow' />
					</div>

					<p className='max-w-4xl italic xl:text-lg'>
						Conoce más sobre nuestra empresa y nuestros valores
					</p>
				</div>
			</section>
			*/}

			<div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[25vh] bg-no-repeat bg-cover flex items-center justify-center">
				<div className='flex min-h-[25vh] items-center justify-center pt-10'>
					<div className='text-center font-light text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] sm:font-normal lg:py-8 lg:px-40'>
						<h1 className='text-5xl'>Nosotros</h1>
					</div>
				</div>
			</div>

			<div className='space-y-10'>
				{/* Misión */}
				<section className='px-3 lg:container lg:px-4 2xl:px-0 flex flex-col md:flex-row gap-10 md:gap-20 *:min-h-[40vh] *:md:min-h-[65vh]'>
					<div className='space-y-5 size-full flex flex-col items-center justify-center'>
						{/* Title */}
						<h2
							className={cn(
								'text-4xl font-bold tracking-tight text-center',
								titleFont.className,
							)}
						>
							Misión
						</h2>
						{/* Data */}
						<p
							className={cn(
								'text-balance tracking-wide text-center leading-relaxed lg:text-lg',
								paragraphFont.className,
							)}
						>
							Comprometidos con la excelencia, nuestro objetivo es brindar a
							cada uno de nuestros clientes las mejores soluciones para sus
							proyectos de mantenimiento y construcción. Nos dedicamos a superar
							las expectativas, brindar confianza y establecer un estándar de
							servicio que refleje nuestra dedicación a la satisfacción del
							cliente y a la calidad de nuestros servicios.
						</p>
					</div>
					<div className='relative rounded-lg size-full'>
						<Image
							src={firstImage}
							alt='Misión'
							fill
							placeholder={shimmerPlaceholderGenerator(500,500)}
							sizes='100vw'
							className='object-cover rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[80px] md:rounded-br-[80px] animate-fade-in-opacity'
						/>
					</div>
				</section>

				{/* Visión */}
				<section className='px-3 lg:container lg:px-4 2xl:px-0 flex flex-col md:flex-row-reverse gap-10 md:gap-20 *:min-h-[40vh] *:md:min-h-[65vh]'>
					<div className='space-y-5 size-full flex flex-col items-center justify-center'>
						{/* Title */}
						<h2
							className={cn(
								'text-4xl lg:text-5xl font-bold tracking-tight text-center',
								titleFont.className,
							)}
						>
							Visión
						</h2>
						{/* Data */}
						<p
							className={cn(
								'text-balance tracking-wide text-center leading-relaxed lg:text-lg',
								paragraphFont.className,
							)}
						>
							Aspiramos a posicionarnos como una empresa líder en los distintos
							campos que nos desarrollamos. Comprometidos a mantenernos a la
							vanguardia de avances tecnológicos en la industria, con el fin de
							elevar constantemente nuestros estándares de satisfacción y
							calidad en la prestación de servicios. Buscando superar las
							expectativas de nuestros clientes, estableciendo así un referente
							de excelencia en cada proyecto que emprendemos.
						</p>
					</div>
					<div className='relative rounded-lg size-full'>
						<Image
							src={secondImage}
							alt='Visión'
							fill
							placeholder={shimmerPlaceholderGenerator(500,500)}
							sizes='100vw'
							className='object-cover rounded-tl-[60px] rounded-bl-[60px] md:rounded-tl-[80px] md:rounded-bl-[80px] animate-fade-in-opacity'
						/>
					</div>
				</section>

				{/* Nuestros valores */}
				<section className='px-3 lg:container lg:px-4 2xl:px-0 flex flex-col md:flex-row gap-10 md:gap-20 *:min-h-[40vh] *:md:min-h-[65vh]'>
					<div className='space-y-5 size-full flex flex-col items-center justify-center'>
						{/* Title */}
						<h2
							className={cn(
								'text-4xl font-bold tracking-tight text-center',
								titleFont.className,
							)}
						>
							Nuestros valores
						</h2>
						{/* Data */}
						<ul
							className={cn(
								'text-balance tracking-wide list-disc list-inside space-y-5 leading-relaxed lg:text-lg ',
								paragraphFont.className,
							)}
						>
							<li>
								Calidad: Nos comprometemos a ofrecer servicios de la más alta
								calidad, cumpliendo con los estándares y regulaciones de la
								industria.
							</li>
							<li>
								Innovación: Buscamos constantemente nuevas y mejores formas de
								satisfacer las necesidades de nuestros clientes.
							</li>
							<li>
								Sostenibilidad: Nos esforzamos por minimizar nuestro impacto en
								el medio ambiente en todas nuestras operaciones.
							</li>
							<li>
								Integridad: Actuamos con honestidad y transparencia en todas
								nuestras interacciones.
							</li>
							<li>
								Compromiso: Nos esforzamos por cumplir y superar las
								expectativas de nuestros clientes en cada proyecto.
							</li>
						</ul>
					</div>
					<div className='relative rounded-lg size-full'>
						<Image
							src={thirdImage}
							alt='Nuestros valores'
							fill
							placeholder={shimmerPlaceholderGenerator(500,500)}
							sizes='100vw'
							className='object-cover rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[80px] md:rounded-bl-[80px] animate-fade-in-opacity'
						/>
					</div>
				</section>
			</div>

			{/* Contact */}
			<section className='bg-gray-200 py-10'>
				<div className='px-3 lg:container lg:px-4 2xl:px-0 bg-white rounded-lg shadow-lg'>
					<div className='p-5'>
						<ContactForm />
					</div>
				</div>
			</section>
		</main>
	);
};

export default NosotrosPage;
