import Link from 'next/link';
import Image from 'next/image';
import { customersData } from '@/db/data';

const PortafolioPage = async () => {
	return (
		<main className='flex flex-col gap-5 mb-5'>
			{/* Banner */}
			<section className='h-[400px] bg-portafolio-banner bg-fixed bg-center bg-cover bg-no-repeat'>
				<div className='size-full text-center flex flex-col items-center justify-center gap-5 text-white bg-black/70'>
					<h1 className='text-2xl xl:text-4xl font-semibold'>
						Portafolio de proyectos
					</h1>

					<div className='flex flex-col items-center justify-center gap-5'>
						<div className='!w-14 border-t border-mbceYellow' />
						<div className='!w-20 border-t border-mbceYellow' />
					</div>

					<p className='max-w-4xl italic xl:text-lg'>
						El pasado que nos respalda.
					</p>
				</div>
			</section>

			<section className='px-3 lg:px-0 lg:container min-h-[80vh]'>
				<div className='flex flex-col gap-5'>
					<h2 className='text-lg font-bold text-center'>
						PROYECTOS DE MANTENIMIENTO Y CONSTRUCCIÓN
					</h2>
					<ul className='flex items-center flex-col sm:flex-row sm:flex-wrap justify-center gap-5 sm:gap-2'>
						{customersData.map((customer) => {
							const [firstImage] = customer.images;

							return (
								<li
									key={customer.id}
									className='size-60 ring-0 hover:ring-4 hover:ring-mbceYellow overflow-hidden group relative flex items-center justify-center'
								>
									<Image
										src={firstImage || ''}
										alt={customer.name}
										width={300}
										height={300}
									/>

									<Link
										href={`/portafolio/${customer.slug}`}
										className='absolute inset-0 grid place-content-center gap-5 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
									>
										<p className='text-lg font-bold text-center'>
											{customer.name}
										</p>
										<p className='text-center hover:text-mbceYellow hover:underline'>
											Ver detalles
										</p>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default PortafolioPage;
