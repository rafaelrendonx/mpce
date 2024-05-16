import Image from 'next/image';
import Link from 'next/link';

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


            <div className='lg:container p-5 xl:px-0'>

                <div className='lg:flex lg:items-center lg:justify-between'>

                    <h2 className="font-semibold text-md text-center xsm:text-xl lg:text-2xl lg:basis-1/2 xl:text-3xl py-5">¿Te interesan nuestros servicios? <br className='max-lg:hidden' /> <br />Comunícate con nosotros:</h2>

                    <ul className='flex flex-col lg:flex-col lg:basis-1/2'>


                        <li className='bg-gray-200 shadow p-2 lg:p-5 flex flex-col lg:grow group relative overflow-hidden rounded-sm gap-3 lg:gap-6 xl:gap-10 z-10'>
                            <div className='absolute -right-1 -top-24 scale-0 bg-[#f7b032] group-hover:scale-[5] size-64 rounded-full transition-all -z-10 duration-300' />

                            <div className='flex items-center gap-2'>
                                <PhoneIcon className='size-5' />
                                <span className='font-bold text-xs lg:text-base'>
                                    (662) 466-9086
                                </span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Image src={whatsappIcon} alt='WhatsappIcon' className='size-5 invert' />
                                <Link className='text-xs lg:text-base'
                                    href={`https://wa.me/+526624669086?text=¡Hola!+Me+gustaría+información+de+un+servicio`}>
                                    Enviar mensaje por Whastapp
                                </Link>
                            </div>

                            <div className='flex items-center gap-2'>
                                <MailIcon strokeWidth={1} className='size-5' />
                                <span className='text-xs lg:text-base'>administracion@mpce.mx</span>
                            </div>

                        </li>

                    </ul>
                </div>

                <div className='pt-10 lg:pt-20 lg:flex lg:items-center lg:justify-between text-center'>
                    <div className='lg:flex lg:flex-col lg:basis-1/2'>
                        <h2 className="font-semibold text-md text-center xsm:text-xl lg:text-2xl xl:text-3xl py-3">O vísitanos en: <br />
                            <br className='max-lg:hidden' />
                            <span className='font-semibold pb-2 text-sm lg:text-lg'>Av. Juan Romero, Col. Arco Iris. <br /> C.P. 83285 Hermosillo, Sonora​​</span>
                        </h2>

                    </div>

                    <div className='flex flex-col lg:flex-col lg:basis-1/2 lg:items-center border'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.457321187691!2d-110.99425942382531!3d29.033051865778894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce83d46e25ad17%3A0xc8e8f9cedfb7366a!2sMPCE(MANTENIMIENTO%2C%20PROYECTO%20Y%20CONSTRUCCION%20ELECTRICA)!5e0!3m2!1ses-419!2smx!4v1715380382890!5m2!1ses-419!2smx'
                            width='600'
                            height='450'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            className='w-full lg:h-64 rounded-sm'
                        ></iframe>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contacto