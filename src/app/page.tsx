import Image from 'next/image';

import Link from 'next/link';

import { heavitasFont } from '@/config/fonts';

import { mpceServices } from '@/lib/constants';

import { cn } from '@/lib/utils';

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
						<Link href={'/nosotros'}>
							<h2 className={cn('text-4xl pb-5 font-bold')}>MPCE</h2>
						</Link>
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
						<Link href={'/servicios'}>
							<h2 className={cn('text-4xl pb-5 font-bold')}>
								Nuestros servicios
							</h2>
						</Link>
						<div></div>
					</div>

					{mpceServices.map((service) => {
						return (
							<div key={service.id}>
								<div
									className={cn(
										`${service.image} min-h-[10vh] bg-no-repeat bg-cover`,
									)}
								>
									<div className='flex flex-col items-center justify-center min-h-[40vh] container p-5 shadow-slate-950 shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] rounded-sm'>
										<div className='w-full min-h-[20vh] items-center justify-center'>
											<div
												className={cn(
													'text-white py-5 flex justify-center sm:items-start sm:justify-start',
												)}
											>
												<Link href={'/servicios'}>
													<h3 className={cn('text-4xl sm:text-5xl')}>
														{service.name}
													</h3>
												</Link>
											</div>
											<div className='text-white flex flex-col sm:min-h-[30vh] sm:items-end sm:justify-end'>
												{service.details.map((subService) => {
													return (
														<p
															key={subService.id}
															className='text-white sm:text-lg'
														>
															{subService.name}
														</p>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</section>

				{/* Portafolio */}
				<section className='text-center'>
					<div className='py-10 divide-y-2 divide-black'>
						<Link href={'/portafolio'}>
							<h2 className={cn('text-4xl pb-5 font-roboto font-bold')}>
								Portafolio
							</h2>
						</Link>
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
