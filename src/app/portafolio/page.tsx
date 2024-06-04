import Link from 'next/link';
import Image from 'next/image';
import { customersData } from '@/db/data';

import { cn } from '@/lib/utils';
import { heavitasFont } from '@/config/fonts';

const PortafolioPage = async () => {
	return (
		<main className='flex flex-col gap-5 mb-5'>
			<div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[25vh] bg-no-repeat bg-cover flex items-center justify-center">
				<div className='flex min-h-[25vh] items-center justify-center'>
					<div className='text-center font-light text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] sm:font-normal lg:py-8 lg:px-40'>
						<h1 className={cn('text-4xl', heavitasFont.className)}>
							Portafolio
						</h1>
					</div>
				</div>
			</div>

			<section className='px-3 lg:px-0 lg:container min-h-[75vh] flex items-center justify-center py-5 font-roboto'>
				<div className='flex flex-col gap-5'>
					<ul className='flex items-center flex-col sm:flex-row sm:flex-wrap justify-center gap-5 sm:gap-12'>
						{customersData.map((customer) => {
							const [firstImage] = customer.images;

							return (
								<li
									key={customer.id}
									className={cn(
										'size-60 ring-0 hover:ring-4 hover:ring-mbceYellow overflow-hidden group relative flex items-center justify-center border-mbceYellow-400 border bg-white text-lg',
									)}
								>
									<Image
										src={firstImage || ''}
										alt={customer.name}
										width={300}
										height={300}
									/>

									<Link
										href={`/portafolio/${customer.slug}`}
										className={cn(
											'absolute inset-0 grid place-content-center gap-5 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300',
										)}
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
