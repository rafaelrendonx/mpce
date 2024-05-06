
import Image from "next/image";
import Link from "next/link";



import { isProjectType } from '@/lib/type-guards';
import { convertFileToJSON } from '@/lib/services/excel-file-handler';

import { LogoSmall } from '@/components/logosmall'
import { LogoMedium } from '@/components/logomedium'
import { ResponsiveMenu } from '@/components/responsivemenu'
import { Navbar } from '@/components/navbar'
import { Separator } from "@/components/ui/separator"



const filePath = '/mock-projects.xlsx';

export default async function Home() {

  // Extract the JSON data from the Excel file
  const jsonData = await convertFileToJSON(filePath);

  // Check if the data is of type Project to avoid runtime errors
  const isProjectData = jsonData.every(isProjectType);
  const projectsFromExcel = isProjectData ? jsonData : [];

  return (
    <div>

      <div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[100vh]">

        <div className="flex flex-row">

          <div className="pt-4 pl-4 basis-1/2 sm:basis-1/3 sm:pt-8 sm:pl-8 md:pt-12 md:pl-12">
            <LogoSmall />
          </div>

          <div className="flex flex-row pt-4 pr-4 basis-1/2 justify-end sm:basis-2/3 sm:pr-8 sm:pt-8 md:pt-12 md:pl-12">
            <div className="hidden md:flex">
              <Navbar />
            </div>
            <div className="md:hidden">
              <ResponsiveMenu />
            </div>
          </div>
        </div>

        <div className="flex min-h-[100vh] items-center pb-10 p-5 border justify-center">
          <div className="text-center font-thin text-white bg-zinc-800 relative opacity-75 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] py-4 sm:px-12 sm:font-extralight">
            <h1 className="text-3xl sm:text-6xl">MPCE</h1>
            <p className="sm:p-5">Mantenimiento, Proyectos y Construcción Electromecánica</p>
          </div>
        </div>

      </div>

      <main className="">


        <div className="text-center">
          <h2 className="text-5xl">MPCE</h2>
        </div>

        <div className="text-center p-5">
          <div className="py-10 divide-y-2 divide-black">
            <h2 className="text-5xl pb-5">Lo que hacemos</h2>
            <div></div>
          </div>
          <div className="sm:flex sm:flex-row">

            <div className="flex flex-col items-center pb-5">

              <div className="pt-3 pb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>

              <h3 className="text-4xl py-2">Mantenimiento</h3>
              <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste laborum, voluptatum porro odio in ad expedita sint mollitia ratione, saepe a, maxime voluptates dolore quam aut dolorem modi doloribus.</p>
            </div>

            <div className="flex flex-col items-center pb-5">

              <div className="pt-3 pb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>

              </div>

              <h3 className="text-4xl py-2">Proyectos</h3>
              <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptatum. Necessitatibus, unde expedita accusamus iure earum doloribus facilis. Qui similique atque voluptatibus officia suscipit libero officiis nemo ratione beatae possimus.</p>
            </div>

            <div className="flex flex-col items-center pb-5">

              <div className="pt-3 pb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>

              </div>

              <h3 className="text-4xl py-2">Construcción</h3>
              <p className="pb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat corrupti vel velit mollitia inventore amet culpa quis minus, ullam sequi error ducimus veritatis aliquam. Atque voluptatem pariatur ipsa architecto?</p>
            </div>


          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl">Portafolio</h2>
          <ul>
            {
              projectsFromExcel.map(project => (
                <li key={project.id} className="border border-black p-1">
                  <h3>
                    Proyecto {project.id}
                  </h3>
                  <h2>Nombre: {project.name}</h2>
                  <p>Breve descripción: {project.shortDescription}</p>
                  <p>Dirección: {project.address}</p>
                  <p>Latitud: {project.lat}</p>
                  <p>Longitud: {project.lng}</p>
                  <p>Url de imagenes: {project.images}</p>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-5xl">Contacto</h2>
        </div>

      </main>

      <footer className="bg-gray-700 min-h-[25vh] static flex items-center justify-center flex-col">
        <div className="text-center text-white relative">
          <p className="">Instagram</p>
          <p className="">Facebook</p>
          <p className="">Whatsapp</p>
        </div>
      </footer>

    </div>


  );
}



