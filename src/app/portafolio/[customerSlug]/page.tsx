import { customersData } from '@/db/data';

import { ImagesGallery } from '@/components/images-gallery';

import { cn } from '@/lib/utils';
import { heavitasFont, futuraFont, futuraBoldFont } from '@/config/fonts';

interface Props {
	params: { customerSlug: string };
}

const PortafolioByCustomerIdPage: React.FC<Props> = async ({ params }) => {
	const customerSlug = params.customerSlug;

	const customer = customersData.find(
		(customer) => customer.slug === customerSlug,
	);

	if (!customer) {
		return <p>Not found</p>;
	}

	const [brandImage, ...customerImages] = customer.images;

	const {
		name,
		description,
		address,
		customerDescription,
		durationLabel,
		projects,
		mbceComment,
	} = customer;
	return (
		<main className='px-3 lg:px-0'>

			<div className="bg-white min-h-[25vh] bg-no-repeat bg-cover flex items-center justify-center">
				<div className='flex min-h-[25vh] items-center justify-center'>
					<div className='text-center font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] sm:font-normal lg:py-8 lg:px-40'>
						<h1 className={cn('text-4xl', heavitasFont.className)}>{name}</h1>
					</div>
				</div>
			</div>

			<article className='p-5 pb-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:container'>
				{/* Gallery Column */}
				<section>
					<div className=''>
						<ImagesGallery images={customerImages} />
					</div>
				</section>

				{/* Information Column */}
				<section className='space-y-5'>
					
					<div className={cn('space-y-px text-lg', futuraFont.className)}>
						<p className='tracking-tight leading-tight'>
							{customerDescription}
						</p>
						<p>
							<strong>Ubicación: </strong>
							{address}
						</p>
						<p>
							<strong>Duración: </strong>
							{durationLabel}
						</p>
					</div>

					<div className={cn('text-lg', futuraFont.className)}>
						<span>{description}</span>
					</div>

					<div className={cn(' ', futuraFont.className)}>
						<h2 className='text-lg font-semibold'>
							Proyectos terminados dentro de la empresa
						</h2>
						<ul className='list-disc list-inside text-lg'>
							{projects.map((project) => (
								<li key={project.id}>{project.description}</li>
							))}
						</ul>
					</div>

					<div className={cn('text-lg', futuraFont.className)}>
						<p>{mbceComment}</p>
					</div>
				</section>
			</article>
		</main>
	);
};

export default PortafolioByCustomerIdPage;
