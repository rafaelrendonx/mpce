import Image from 'next/image';

import { MailIcon, PhoneIcon, User, UserIcon } from 'lucide-react';

import { mpceContactPeople } from '@/lib/constants';

import whatsappIcon from '@/../public/whatsapp-white-icon.svg';

function Contacto() {
    return (
        <div>
            <div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[25vh] bg-no-repeat bg-cover flex items-center justify-center">
                <div className='flex min-h-[25vh] items-center justify-center pt-10'>
                    <div className='text-center font-light text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:font-normal lg:py-8 lg:px-40 lg:font-light'>
                        <h1 className='text-5xl'>Contacto</h1>
                    </div>
                </div>
            </div>


            <div className='lg:container lg:pl-0 lg:pr-0 lg:py-10 py-5'>

                <div className='lg:flex lg:items-center lg:justify-between'>

                    <h2 className="font-semibold text-2xl text-center lg:text-4xl lg:basis-1/2 xl:text-5xl">¿Te interesan nuestros servicios? <br className='max-lg:hidden' /> <br /> Platica con nosotros:</h2>
                    <ul className='flex flex-col md:flex-row md:justify-between gap-5 lg:flex-col lg:basis-1/2 py-5'>
                        {mpceContactPeople.map((person) => {
                            return (
                                <li
                                    key={person.id}
                                    className='bg-gray-200 shadow lg:p-5 flex flex-col gap-1 lg:grow group relative overflow-hidden z-10 rounded-sm'
                                >
                                    <div className='absolute -right-24 -top-24 scale-0 bg-[#f7b032] group-hover:scale-[5] size-60 rounded-full transition-all -z-10 duration-300' />

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
                                        <MailIcon strokeWidth={0.75} className='size-5' />
                                        <span>{person.email}</span>
                                    </div>

                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='pt-10 lg:pt-20 lg:flex lg:items-center lg:justify-between'>
                    <h2 className="font-semibold text-2xl text-center lg:text-4xl lg:basis-1/2 xl:text-5xl">O vísitanos:</h2>

                    <div className='flex flex-col lg:flex-col lg:basis-1/2 lg:items-center text-center py-5'>
                        <p className=''>Av. Juan Romero, Col. Arco Iris. <br /> C.P. 83285 Hermosillo, Sonora​​</p>
                        <iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.457321187691!2d-110.99425942382531!3d29.033051865778894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce83d46e25ad17%3A0xc8e8f9cedfb7366a!2sMPCE(MANTENIMIENTO%2C%20PROYECTO%20Y%20CONSTRUCCION%20ELECTRICA)!5e0!3m2!1ses-419!2smx!4v1715380382890!5m2!1ses-419!2smx'
							width='600'
							height='450'
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
                            className='w-full'
						></iframe>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contacto