import Image from 'next/image';

import Link from 'next/link';

import { heavitasFont } from '@/config/fonts';

import { mpceServices } from '@/lib/constants';

import { cn } from '@/lib/utils';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
	return (
		<div>
			<div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[100vh] bg-no-repeat bg-cover flex items-center justify-center">
				<div className='flex min-h-[80vh] container items-center p-4 xsm:px-8 sm:px-6 md:px-8 lg:px-8 xl:px-10 1.5xl:px-20 2xl:px-10 3xl:px-10 justify-center pb-24 sm:pt-4 md:pb-36'>
					<div
						className={cn(
							'text-center text-black bg-mbceYellow/85 relative shadow-lg py-4 sm:px-12 sm:font-extralight lg:py-8 lg:px-40 lg:font-normal rounded-sm',
							'flex flex-col gap-4',
							heavitasFont.className,
						)}
					>
						<h1 className={cn('text-6xl sm:text-6xl drop-shadow-lg')}>MPCE</h1>

						<p
							className={cn(
								'text-sm xsm:text-lg sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl',
							)}
						>
							Mantenimiento, Proyectos y Construcción Electromecánica
						</p>
						{/*
						<div className='bg-white rounded-full max-w-sm mx-auto w-10/12'>
						
						<span className='text-black font-bold text-lg'>
						¡Excelencia y determinación!
						</span>
						
						</div>
						*/}
					</div>
				</div>
			</div>

			<main
				className={cn(
					'flex flex-col gap-10 py-10 px-3 2xl:px-0 lg:container font-roboto',
				)}
			>
				{/* MPCE */}
				<section className='text-center'>
					<div className='divide-y-[1px] divide-black'>
						<h2 className={cn('text-4xl pb-5 font-bold')}>MPCE</h2>
						<div></div>
						<p className='pt-5 text-lg'>
							Comprometidos con la excelencia, nuestro objetivo es brindar a
							cada uno de nuestros clientes las mejores soluciones para sus
							proyectos de mantenimiento y construcción. Nos dedicamos a superar
							las expectativas, brindar confianza y establecer un estándar de
							servicio que refleje nuestra dedicación a la satisfacción del
							cliente y a la calidad de nuestros servicios.
							<br />
							<br />
							Aspiramos a posicionarnos como una empresa líder en los distintos
							campos que nos desarrollamos. Comprometidos a mantenernos a la
							vanguardia de avances tecnológicos en la industria, con el fin de
							elevar constantemente nuestros estándares de satisfacción y
							calidad en la prestación de servicios. Buscando superar las
							expectativas de nuestros clientes, estableciendo así un referente
							de excelencia en cada proyecto que emprendemos.
						</p>
					</div>
				</section>

				{/* Nuestros servicios */}
				<section className='text-center font-roboto'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className={cn('text-4xl pb-5 font-bold')}>
							Nuestros servicios
						</h2>
						<div></div>
					</div>

					<div className='px-3 lg:container lg:pl-0 lg:pr-0 lg:py-10 py-5'>
						<div className='sm:grid sm:gap-2 lg:grid lg:grid-cols-2'>
							{mpceServices.map((service) => {
								return (
									<div key={service.id}>
										<div className='flex justify-between items-center pb-4 lg:justify-around'>
											<h3 className={cn('text-lg font-bold py-2 text-center')}>
												{service.name}
											</h3>
											<Image
												src={service.icon}
												width={35}
												height={35}
												alt='icon-name'
											/>
										</div>
										<div>
											<Separator className='mb-10' />
										</div>
										<Carousel className='w-full max-w-xs pb-10'>
											<CarouselContent>
												{service.details.map((subService) => {
													return (
														<CarouselItem key={subService.id}>
															<div className='p-1'>
																<Card>
																	<CardContent className='flex aspect-square items-center justify-center p-6'>
																		<span className='text-xl font-semibold'>
																			{subService.name}
																		</span>
																	</CardContent>
																</Card>
															</div>
														</CarouselItem>
													);
												})}
											</CarouselContent>
											<CarouselPrevious />
											<CarouselNext />
										</Carousel>
									</div>
								);
							})}
							<div></div>
						</div>
					</div>
					{/** 
					 
					<ul className='grid grid-cols-2 md:grid-cols-3 gap-10 font-roboto'>
						{mpceServices.map((service) => {
							return (
								<li
									key={service.id}
									className='bg-gray-200 shadow p-2 lg:p-5 flex flex-col items-center even:bg-mbceYellow gap-1'
								>
									<h3 className='text-2xl font-bold'>{service.name}</h3>
									<Image
										src={service.icon}
										width={80}
										height={80}
										alt='icon-name'
									/>
								</li>
							);
						})}
					</ul>
				**/}
				</section>

				{/* Portafolio */}
				<section className='text-center'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className={cn('text-4xl pb-5 font-roboto font-bold')}>
							Portafolio
						</h2>
						<div></div>
					</div>

					<div className='flex flex-col gap-8 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3'>
						<Image
							src={'https://source.unsplash.com/random/?Construction&16'}
							width={600}
							height={300}
							alt='imagen1'
							className='w-full'
						/>

						<Image
							src={'https://source.unsplash.com/random/?Construction&2'}
							width={600}
							height={300}
							alt='imagen2'
						/>

						<Image
							src={'https://source.unsplash.com/random/?Construction&3'}
							width={600}
							height={300}
							alt='imagen3'
						/>

						<Image
							src={'https://source.unsplash.com/random/?Construction&4'}
							width={600}
							height={300}
							alt='imagen4'
						/>

						<Image
							src={'https://source.unsplash.com/random/?Construction&5'}
							width={600}
							height={300}
							alt='imagen5'
						/>

						<Image
							src={'https://source.unsplash.com/random/?Construction&6'}
							width={600}
							height={300}
							alt='imagen6'
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
