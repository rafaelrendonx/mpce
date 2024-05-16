import Image from 'next/image';

import Link from 'next/link';

import { heavitasFont } from '@/config/fonts';

import { mpceServices } from '@/lib/constants';


import { cn } from '@/lib/utils';

export default async function Home() {
	return (
		<div>
			<div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[100vh] bg-no-repeat bg-cover flex items-center justify-center">
				<div className='flex min-h-[80vh] items-center p-5 justify-center xsm:pt-20 sm:pt-4 md:pb-20'>
					<div
						className={cn(
							'text-center text-black bg-mbceYellow/95 relative shadow-lg py-4 sm:px-12 sm:font-extralight lg:py-8 lg:px-40 lg:font-normal rounded-sm',
							'flex flex-col gap-5'
							// heavitasFont.className,
						)}
					>
						<h1
							className={cn(
								'text-6xl sm:text-6xl drop-shadow-lg',
								heavitasFont.className,
							)}
						>
							MPCE
						</h1>
						<p className='font-medium'>
							Mantenimiento, Proyectos y Construcción Electromecánica
						</p>

						<div className='bg-white rounded-full max-w-sm mx-auto w-10/12'>

							<span className='text-black font-bold text-lg'>
								¡Excelencia y determinación!
							</span>

						</div>
					</div>
				</div>
			</div>

			<main className='flex flex-col gap-10 py-10 px-3 2xl:px-0 lg:container'>
				{/* MPCE */}
				<section className='text-center'>
					<div className='divide-y-[1px] divide-black'>
						<h2 className='text-4xl pb-5'>MPCE</h2>
						<div></div>
						<p className='pt-5'>
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

				{/* Lo que hacemos */}
				<section className='text-center'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className='text-4xl pb-5'>Lo que hacemos</h2>
						<div></div>
					</div>

					<ul className='grid grid-cols-2 md:grid-cols-3 gap-10'>
						{mpceServices.map((service) => {
							return (
								<li
									key={service.id}
									className='bg-gray-200 shadow p-2 lg:p-5 flex flex-col items-center even:bg-mbceYellow gap-1'
								>
									<h3 className='text-xl font-bold'>{service.name}</h3>
									<Image
										src={service.icon}
										width={80}
										height={80}
										alt='electric-icon'
									/>
								</li>
							);
						})}
					</ul>
				</section>

				{/* Portafolio */}
				<section className='text-center'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className='text-4xl pb-5'>Portafolio</h2>
						<div></div>
					</div>

					<div className='flex flex-col gap-8 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 border'>
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
