
import Image from "next/image";
import Link from "next/link";



import { isProjectType } from '@/lib/type-guards';
import { convertFileToJSON } from '@/lib/services/excel-file-handler';

import { Logo } from '@/components/logo'
import { ResponsiveMenu } from '@/components/responsivemenu'
import { Navbar } from '@/components/navbar'

import { Button } from "@/components/ui/button"


const filePath = '/mock-projects.xlsx';

export default async function Home() {

  // Extract the JSON data from the Excel file
  const jsonData = await convertFileToJSON(filePath);

  // Check if the data is of type Project to avoid runtime errors
  const isProjectData = jsonData.every(isProjectType);
  const projectsFromExcel = isProjectData ? jsonData : [];

  return (
    <div>

      <div className="bg-[url('https://source.unsplash.com/random/?Construction&12')] min-h-[90vh]">

        <div className="flex flex-row">

          <div className="pt-4 pl-4 basis-1/2 sm:basis-1/3 sm:pt-8 sm:pl-8 md:pt-14 md:pl-14">
            <Logo />
          </div>

          <div className="flex flex-row pl-[6rem] pt-4 basis-1/2 sm:basis-2/3 sm:pl-[20rem] sm:pt-8">
            <div className="hidden md:flex">
              <Navbar />
            </div>
            <div className="md:hidden">
              <ResponsiveMenu />
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center pt-32">
          <div className="text-center text-white bg-gray-700 relative opacity-75 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] p-5">
            <h1 className="text-6xl">MPCE</h1>
            <p className="p-5">Mantenimiento, Proyectos y Construcción Electromecánica</p>
          </div>
        </div>

      </div>

      <main className="">


        <div className="text-center">
          <h2 className="text-6xl">MPCE</h2>
          <Button className="bg-gray-700">Prueba</Button>
        </div>

        <div className="text-center">
          <h2 className="text-6xl">Servicios</h2>
        </div>

        <div className="text-center">
          <h2 className="text-6xl">Portafolio</h2>
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
          <h2 className="text-6xl">Contacto</h2>
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
