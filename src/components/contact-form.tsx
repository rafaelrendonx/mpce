'use client';

import { useState } from 'react';

const initialForm = {
	name: '',
	message: '',
};

type ContactForm = typeof initialForm;

export const ContactForm = () => {
	const [form, setForm] = useState<ContactForm>(initialForm);

	const onInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm({
			...form,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				window?.open(
					`mailto:mpce@mpce.com.mx?subject=Contacto desde página web&body=Mi nombre es ${form.name}. Me gustaría contactarlos para ${form.message}`,
				);
			}}
			className='space-y-5'
		>
			<h2 className='text-2xl font-bold underline underline-offset-2 decoration-mbceYellow'>
				Contactanos
			</h2>

			<div>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Nombre'
					onChange={onInputChange}
					className='border bg-background ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mbceYellow rounded p-2'
				/>
			</div>

			<div className='size-full'>
				<label htmlFor='message'></label>
				<textarea
					id='message'
					name='message'
					placeholder='Mensaje'
					onChange={onInputChange}
					className='size-full border bg-background ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mbceYellow rounded p-2 h-32 resize-none'
				></textarea>
			</div>
			<div className='size-full flex justify-end'>
				<button className='px-5 py-2 border rounded-lg bg-mbceYellow text-white text-lg font-medium hover:bg-mbceYellow/80'>
					Enviar
				</button>
			</div>
		</form>
	);
};
