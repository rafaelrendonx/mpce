'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

import { useState } from 'react';

import Image from 'next/image';

import { AspectRatio } from './ui/aspect-ratio';

interface Props {
	images: string[];
}

export const ImagesGallery = ({ images }: Props) => {
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div className='flex flex-col px-1'>
			<div className='flex justify-center items-center'>
				<AspectRatio ratio={16 / 10}>
					<Image
						src={selectedImage || ''}
						alt='Customer Image'
						fill
						className='rounded-sm'
					/>
				</AspectRatio>
			</div>

			<div className='hidden'>
				<AspectRatio ratio={16 / 9}>
					<Image
						src={selectedImage || ''}
						alt='Customer Image'
						fill
						className='rounded-sm'
					/>
				</AspectRatio>
			</div>

			<Carousel
				opts={{
					align: 'start',
				}}
				className='mx-0'
			>
				<CarouselContent className='-ml-0'>
					{images.map((image) => (
						<CarouselItem
							className='p-1 pl-0 basis-28 xsm:basis-32 flex justify-center items-center sm:basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'
							key={image}
						>
							<div
								className='w-36 h-20 relative flex items-center justify-center cursor-pointer hover:opacity-50 transition-opacity'
								onClick={() => setSelectedImage(image)}
							>
								<Card>
									<CardContent className=''>
										<Image
											src={image || ''}
											alt='Customer Image'
											fill
											className=''
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			{/**
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
		* **/}
		</div>
	);
};
