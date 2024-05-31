import Image from 'next/image';
import { cn } from '@/lib/utils';
import { heavitasFont, futuraFont, futuraBoldFont } from '@/config/fonts';
import { mpceServices } from '@/lib/constants';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

function Servicios() {
	return (
		<div>
			<div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[25vh] bg-no-repeat bg-cover flex items-center justify-center">
				<div className='flex min-h-[25vh] items-center justify-center'>
					<div className='text-center font-light text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:font-normal lg:py-8 lg:px-40 lg:font-light'>
						<h1 className={cn('text-4xl', heavitasFont.className)}>
							Servicios
						</h1>
					</div>
				</div>
			</div>

			<div className='px-3 lg:container lg:pl-0 lg:pr-0 lg:py-10 py-5'>
				<div className='sm:grid sm:gap-2 lg:grid lg:grid-cols-4'>
					{mpceServices.map((service) => {
						return (
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
								<h3
									className={cn(
										'text-3xl py-2 text-center',
										futuraBoldFont.className,
									)}
								>
									{service.name}
								</h3>
							</div>
						);
					})}
				</div>
			</div>

			<div className='px-3 lg:container lg:pl-0 lg:pr-0 lg:py-10 py-5'>
				<Accordion
					type='multiple'
					className='sm:grid sm:gap-2 lg:grid'
				>
					{mpceServices.map((service) => {
						return (
							<AccordionItem
								value={String(service.id)}
								key={service.id}
							>
								<AccordionTrigger className='flex items-center pb-5'>
									<div className='p-10'>
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
									<h3
										className={cn(
											'text-3xl py-2 text-center',
											futuraBoldFont.className,
										)}
									>
										{service.name}
									</h3>
								</AccordionTrigger>
								<AccordionContent className='flex flex-col items-center pb-5'>
									<p
										className={cn(
											'pb-5 text-lg text-center',
											futuraFont.className,
										)}
									>
										{service.details.map((subService) => {
											return <p key={subService.id}>{subService.name}</p>;
										})}
									</p>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</div>
	);
}

export default Servicios;
