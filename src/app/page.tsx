import Image from 'next/image';

import { MailIcon, PhoneIcon, User, UserIcon } from 'lucide-react';

import { mpceContactPeople } from '@/lib/constants';

import whatsappIcon from '@/../public/whatsapp-white-icon.svg';

export default async function Home() {
	return (
		<div>
			<div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[100vh] bg-no-repeat bg-cover">
				<div className='flex min-h-[80vh] items-center p-5 justify-center xsm:pt-20 sm:pt-4 md:pb-20'>
					<div className='text-center font-thin text-white bg-zinc-800 relative opacity-75 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] py-4 sm:px-12 sm:font-extralight lg:py-8 lg:px-40 lg:font-light'>
						<h1 className='text-3xl sm:text-6xl'>MPCE</h1>
						<p className='sm:p-5'>
							Mantenimiento, Proyectos y Construcción Electromecánica
						</p>
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
							ullam! Pariatur voluptate illum ipsam sit culpa fuga voluptatem ad
							eligendi distinctio illo laborum tempora, provident nihil,
							nesciunt aut quis saepe! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Mollitia, laudantium quia, eius odit commodi
							quidem nobis repudiandae error aut sequi voluptatem labore
							corrupti, at in voluptatibus libero deleniti dignissimos
							praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Commodi repellat, aliquam natus exercitationem aut
							consectetur amet laborum sed nihil. Nihil incidunt ipsa voluptas
							accusamus sed laboriosam vitae aut iure rerum? Lorem ipsum dolor
							sit amet consectetur, adipisicing elit. Sapiente veritatis, magnam
							repellat blanditiis fugit corrupti! Vitae molestias minima,
							suscipit dolor maiores ex repudiandae delectus, enim accusamus
							deleniti reiciendis rem! Quidem?
						</p>
					</div>
				</section>

				{/* Lo que hacemos */}
				<section className='text-center'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className='text-4xl pb-5'>Lo que hacemos</h2>
						<div></div>
					</div>

					<div className='sm:flex sm:flex-row'>
						<div className='flex flex-col items-center pb-5'>
							<div className='pt-3 pb-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-12 h-12'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z'
									/>
								</svg>
							</div>
							<h3 className='text-3xl py-2'>Mantenimiento</h3>
							<p className='pb-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam iste laborum, voluptatum porro odio in ad expedita
								sint mollitia ratione, saepe a, maxime voluptates dolore quam
								aut dolorem modi doloribus.
							</p>
						</div>

						<div className='flex flex-col items-center pb-5'>
							<div className='pt-3 pb-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-12 h-12'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6'
									/>
								</svg>
							</div>
							<h3 className='text-3xl py-2'>Proyectos</h3>
							<p className='pb-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deserunt, voluptatum. Necessitatibus, unde expedita accusamus
								iure earum doloribus facilis. Qui similique atque voluptatibus
								officia suscipit libero officiis nemo ratione beatae possimus.
							</p>
						</div>

						<div className='flex flex-col items-center pb-5'>
							<div className='pt-3 pb-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-12 h-12'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25'
									/>
								</svg>
							</div>
							<h3 className='text-3xl py-2'>Construcción</h3>
							<p className='pb-5'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
								quaerat corrupti vel velit mollitia inventore amet culpa quis
								minus, ullam sequi error ducimus veritatis aliquam. Atque
								voluptatem pariatur ipsa architecto?
							</p>
						</div>
					</div>
				</section>

				{/* Portafolio */}
				<section className='text-center'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className='text-4xl pb-5'>Portafolio</h2>
						<div></div>
					</div>

					<div className='max-md:flex max-md:flex-col gap-8 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3'>
						<Image
							src={'https://source.unsplash.com/random/?Construction&7'}
							width={600}
							height={300}
							alt='imagen1'
						/>
						<Image
							src={'https://source.unsplash.com/random/?Construction&2'}
							width={600}
							height={300}
							alt='imagen2'
						/>
						<Image
							src={'https://source.unsplash.com/random/?Construction&4'}
							width={600}
							height={300}
							alt='imagen3'
						/>
						<Image
							src={'https://source.unsplash.com/random/?Construction&3'}
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

				{/* Contacto */}
				<section id='contacto'>
					<div className='py-10 divide-y-2 divide-black'>
						<h2 className='text-4xl pb-5 text-center'>Contacto</h2>
						<div></div>
					</div>
					<div>
						<ul className='flex flex-col md:flex-row md:justify-between gap-5'>
							{mpceContactPeople.map((person) => {
								return (
									<li
										key={person.id}
										className='bg-gray-200 shadow p-2 lg:p-5 flex flex-col gap-1 lg:grow group relative overflow-hidden z-10 rounded-lg'
									>
										<div className='absolute -right-24 -top-24 scale-0 bg-[#f7b032] group-hover:scale-[5] size-60 rounded-full transition-all -z-10 duration-300'/>
										<div className='flex items-center gap-2'>
											<UserIcon className='size-5' />
											<span>{person.name}</span>
										</div>

										<div className='flex items-center gap-2'>
											<div className='flex items-center gap-px'>
												<Image
													src={whatsappIcon}
													alt='WhatsappIcon'
													className='size-4 invert'
												/>
												<PhoneIcon
													strokeWidth={0.75}
													className='size-4'
												/>
											</div>
											<span className='font-bold text-lg'>
												{person.phoneNumber}
											</span>
										</div>

										<div className='flex items-center gap-2'>
											<MailIcon
												strokeWidth={0.75}
												className='size-5'
											/>
											<span>{person.email}</span>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
}
