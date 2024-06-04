import Image from 'next/image';
import { cn } from '@/lib/utils';
import { heavitasFont } from '@/config/fonts';
import { mpceServices } from '@/lib/constants';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { Separator } from '@/components/ui/separator';

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

			<div className='py-10 px-3 font-roboto sm:container'>
				{/**Primer accordion**/}
				<Accordion
					type='multiple'
					className=''
				>
					{mpceServices.map((service) => {
						return (
							<AccordionItem
								value={String(service.id)}
								key={service.id}
							>
								<AccordionTrigger className='py-5 hover:no-underline'>
									<div className='flex justify-between items-center pb-1 '>
										<h3 className={cn('text-lg font-bold')}>{service.name}</h3>
										<Image
											src={service.icon}
											alt={service.name}
											width={35}
											height={35}
										/>
									</div>
									<div>
										<Separator className='mb-2' />
									</div>
								</AccordionTrigger>

								<AccordionContent className=''>
									{/**Segundo accordion**/}
									<Accordion
										type='multiple'
										className=''
									>
										{service.details.map((subService) => {
											return (
												<AccordionItem
													value={String(subService.id)}
													key={subService.id}
												>
													<AccordionTrigger className=''>
														<div className=''>
															<h4 className={cn('font-semibold text-end text-lg')}>{subService.name}</h4>
														</div>
													</AccordionTrigger>

													<AccordionContent>
														{/**Tercer accordion**/}
														<p className='text-md text-end'>{subService.description}</p>

														{subService.details.map((description) => {
															return (
																<p key={description.id} className={cn('text-md text-end font-semibold')}>{description.name}</p>
															);
														})}
													</AccordionContent>
												</AccordionItem>
											);
										})}
									</Accordion>
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
