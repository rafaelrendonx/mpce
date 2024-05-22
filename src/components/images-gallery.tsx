'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel"
  

import { useState } from 'react';

import Image from 'next/image';

import { AspectRatio } from './ui/aspect-ratio';

interface Props {
	images: string[];
}

export const ImagesGallery = ({ images }: Props) => {
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div className='flex flex-col'>

			<div className='w-full h-40'>
				<AspectRatio ratio={16 / 9}>
					<Image
						src={selectedImage || ''}
						alt='Customer Image'
						fill
						className='rounded-sm'
					/>
				</AspectRatio>
			</div>
			
			<div className='border flex'>
				<ul className='overflow-x-scroll grid grid-flow-col justify-start gap-2 border-b border-x border-white rounded-sm'>
					{images.map((image) => (
						<li
							key={image}
							className='size-32 relative flex items-center justify-center cursor-pointer hover:opacity-50 transition-opacity'
							onClick={() => setSelectedImage(image)}
						>
							<Image
								src={image || ''}
								alt='Customer Image'
								fill
								className='object-cover'
							/>
						</li>
					))}
				</ul>
			</div>

		</div>
	);
};
