import { customersData } from '@/db/data';

import { ImagesGallery } from '@/components/images-gallery';

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
		<main className='px-3 lg:px-0 pt-[100px]'>
			<article className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:container'>
				{/* Gallery Column */}
				<section>
					<div>
						<ImagesGallery images={customerImages} />
					</div>
				</section>

				{/* Information Column */}
				<section className='space-y-5'>
					<h1 className='text-3xl lg:text-5xl text-balance text-center font-bold tracking-tighter'>
						{name}
					</h1>
					<div className='space-y-px'>
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

					<div>
						<span>{description}</span>
					</div>

					<div>
						<h2 className='text-lg font-semibold'>
							Proyectos terminados dentro de la empresa
						</h2>
						<ul className='list-disc list-inside'>
							{projects.map((project) => (
								<li key={project.id}>{project.description}</li>
							))}
						</ul>
					</div>

					<div>
						<p>{mbceComment}</p>
					</div>
				</section>
			</article>
		</main>
	);
};

export default PortafolioByCustomerIdPage;
