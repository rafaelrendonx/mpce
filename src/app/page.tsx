import Image from "next/image";
import { isProjectType } from '@/lib/type-guards';
import { convertFileToJSON } from '@/lib/services/excel-file-handler';


const filePath = '/mock-projects.xlsx';

export default async function Home() {

  // Extract the JSON data from the Excel file
  const jsonData = await convertFileToJSON(filePath);

  // Check if the data is of type Project to avoid runtime errors
  const isProjectData = jsonData.every(isProjectType);
  const projectsFromExcel = isProjectData ? jsonData : [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <Image src="https://source.unsplash.com/random/?Construction&1"
          alt="Imagen"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
        <h1>Lista de proyectos</h1>
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


    </main>
  );
}
