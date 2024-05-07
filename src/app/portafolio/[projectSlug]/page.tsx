import Link from 'next/link';
import Image from 'next/image';

import { isProjectType } from '@/lib/type-guards';

import { convertFileToJSON } from '@/lib/services/excel-file-handler';

interface Props {
	params: { projectSlug: string };
}

const filePath = '/mock-projects.xlsx';

const ProyectoByProjectSlugPage: React.FC<Props> = async ({ params }) => {
	const jsonData = await convertFileToJSON(filePath);

	const isProjectData = jsonData.every(isProjectType);

	const projectsFromExcel = isProjectData ? jsonData : [];

	const project = projectsFromExcel.find(
		(project) => project.slug === params.projectSlug,
	);

	if (!project) {
		return <div>Proyecto no encontrado</div>;
	}

	const {
		address,
		id,
		lat,
		lng,
		name,
		shortDescription,
		slug,
		description,
		images,
	} = project;

	const finishedDate = new Date('2024-01-15').toLocaleDateString();

	const projectImages = images.split(',');

	const [firstImage, secondImage, ...restOfImages] = projectImages;

	return (
		<main className='space-y-5'>
			<section className='relative min-h-[25vh] w-full flex items-center justify-center'>
				<Image
					src={`/images/projects/${firstImage}` || '/no-image.jpg'}
					alt={project.name}
					fill
					className='object-cover'
				/>
				<div className='z-10 lg:container space-y-px'>
					<h1 className='text-white lg:text-lg 2xl:text-3xl font-bold'>
						{name}
					</h1>
					<div className='text-white text-sm lg:text-base 2xl:text-lg space-x-1'>
						<Link
							className='hover:underline hover:text-gray-200'
							href={'/'}
						>
							Inicio
						</Link>
						/
						<Link
							className='hover:underline hover:text-gray-200'
							href={'/portafolio'}
						>
							Proyectos
						</Link>
						/<span className='text-sky-500'>{name}</span>
					</div>
				</div>
			</section>
			<section className='container'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10'>
					{/* Col-1 */}
					<div
						id='description-image'
						className='space-y-5 order-2'
					>
						<div className='relative'>
							<Image
								src={`/images/projects/${secondImage}` || '/no-image.jpg'}
								alt={project.name}
								fill
								className='object-cover !static'
							/>
						</div>
						<p className='text-balance text-start leading-relaxed tracking-wide'>
							{description}
						</p>
						<div className='grid grid-cols-2 grid-rows-2 gap-2'>
							{restOfImages.map((image, index) => (
								<div
									key={index}
									className='relative'
								>
									<Image
										src={`/images/projects/${image}` || '/no-image.jpg'}
										alt={project.name}
										fill
										className='object-cover !static'
									/>
								</div>
							))}
						</div>
					</div>
					{/* Col-2 */}
					<div id='project-info-social-media' className='order-1 md:order-2'>
						<div className='space-y-4'>
							<h1 className='text-2xl font-bold'>{name}</h1>

							<h2 className='text-2xl font-medium'>Información del proyecto</h2>
							<ul>
								<li>
									<strong>Cliente:</strong> {name}
								</li>
								<li>
									<strong>Dirección:</strong> {address}
								</li>
								<li>
									<strong>Fecha de finalización:</strong> {finishedDate}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='container'>
				<h3 className='text-2xl font-bold'>Más proyectos</h3>
				<div className='flex items-center gap-5'>
					{Array.from({ length: 3 }).map((_, index) => (
						<div
							key={index}
							className='relative w-1/3'
						>
							<Image
								src={'https://source.unsplash.com/random/?Construction&12'}
								alt={project.name}
								fill
								className='object-cover !static'
							/>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default ProyectoByProjectSlugPage;
