interface Customer {
	id: number;
	name: string;
	slug: string;
	durationLabel: string;
	address: string;
	customerDescription: string;
	description: string;
	mbceComment?: string;
	projects: Project[];
	images: string[];
}

interface Project {
	id: number;
	description: string;
}

export const customersData: Array<Customer> = [
	{
		id: 0,
		name: 'CAB LOGISTICS PISA',
		slug: 'cab-logistics-pisa',
		durationLabel: 'Trayectoria con más de 11 años.',
		address: 'Hermosillo',
		customerDescription: 'Empresa farmacéutica, 100% mexicana',
		description:
			'El proyecto PISA ha sido una parte fundamental de nuestra consolidación profesional. Durante este tiempo, se han desempeñado diversas funciones que han contribuido al mantenimiento y mejoramiento continuo de las instalaciones de la empresa.',
		mbceComment:
			'A lo largo de estos años, el compromiso con el proyecto PISA ha sido constante, buscando siempre superar los estándares de calidad y contribuir al óptimo funcionamiento de las instalaciones.',
		projects: [
			{
				id: 0,
				description: `Instalación de una subestación eléctrica para garantizar un suministro eléctrico eficiente y seguro.`,
			},
			{
				id: 1,
				description: `Reparación de Tablaroca para mejorar la estética y funcionalidad de los espacios.`,
			},
			{
				id: 2,
				description: `Mantenimiento en el área de la plomería.`,
			},
			{
				id: 3,
				description: `Implementación y mantenimiento de sistemas de control e incendios, contribuyendo así a la seguridad y protección de las instalaciones.`,
			},
			{
				id: 4,
				description: `Mantenimiento en puertas y ventanas, para garantizar su correcto funcionamiento y seguridad.`,
			},
			{
				id: 5,
				description: `Entre otros.`,
			},
		],
		images: [
			'/images/projects/cab-logistics-pisa-1.png',
			'/images/projects/cab-logistics-pisa-2.png',
		],
	},
	{
		id: 1,
		name: 'NORSON',
		slug: 'norson',
		durationLabel: 'Trayectoria con más de 15 años.',
		address: 'Hermosillo',
		customerDescription:
			'Empresa Sonorense, dedicada a la producción y comercialización de carne de puerco; líder en su ramo.',
		description: `La relación comercial con Norson, uno de nuestros principales clientes, nos ha permitido establecer una sólida asociación que ha facilitado el desarrollo de diversos proyectos, demostrando nuestro compromiso inquebrantable con la calidad y la excelencia en el servicio.`,
		mbceComment: `Es importante destacar que nuestro compromiso va más allá de las expectativas convencionales, ya que hemos demostrado estar disponibles para atender emergencias incluso en situaciones de gran dificultad, como climas adversos o trabajos fuera de horario.Estamos orgullosos de la mancuerna que hemos construido con Norson y estamos comprometidos a seguir contribuyendo al éxito continuo de sus operaciones.`,
		projects: [
			{
				id: 0,
				description: `Suministros de instalaciones eléctricas, proporcionando soluciones confiables.`,
			},
			{
				id: 1,
				description: `Mantenimiento y mejoras en sus granjas, optimizando sus operaciones y maximizando su rendimiento.`,
			},
			{
				id: 2,
				description: `Servicios especializados a generadores eléctricos, garantizando un funcionamiento óptimo y una respuesta rápida ante cualquier eventualidad.`,
			},
			{
				id: 3,
				description: `Entre muchos otros.`,
			},
		],
		images: ['/images/projects/norson-1.png', '/images/projects/norson-2.png'],
	},
	{
		id: 2,
		name: `O'REILLY`,
		slug: `oreilly`,
		durationLabel: `2 meses.`,
		address: `Hermosillo (Zona Perisur, Blvrd. Progreso, Blvrd. Portillo, Blvrd. Paloverde, etc.), Navojoa, Guaymas, Obregón.`,
		customerDescription: `O'Reilly Automotive, Inc. es un minorista estadounidense de repuestos para automóviles.`,
		description: '',
		projects: [
			{
				id: 0,
				description: `Instalación de una planta de emergencia 22kw.`,
			},
			{
				id: 1,
				description: `Instalación de soportes.`,
			},
			{
				id: 2,
				description: `Instalación de ductos para escape y aire caliente.`,
			},
			{
				id: 3,
				description: `Transferencia automática.`,
			},
		],
		images: [
			'/images/projects/oreilly-1.png',
			'/images/projects/oreilly-2.png',
			'/images/projects/oreilly-3.jpg',
		],
	},
	{
		id: 3,
		name: `THE HOME DEPOT - NUEVO LEÓN`,
		slug: `the-home-depot-nuevo-leon`,
		durationLabel: `Marzo 2023 a Septiembre 2023.`,
		address: `Escobedo, Nuevo León.`,
		customerDescription: `The Home Depot es una empresa minorista estadounidense de mejoras del hogar, ferretería, bricolaje y materiales de construcción.`,
		description: `El proyecto consistía en proporcionar el suministro e instalación del sistema HVAC para toda la tienda.`,
		mbceComment: `Como contratistas, nos enorgullece haber superado las expectativas y haber contribuido al éxito integral de este proyecto para The Home Depot.Esta experiencia refuerza nuestro compromiso con la excelencia y nuestra capacidad para abordar desafíos complejos de manera efectiva, manteniendo siempre los más altos estándares de calidad en cada proyecto que emprendemos.`,
		projects: [
			{
				id: 0,
				description: `Gran habilidad técnica de nuestro equipo en la instalación del sistema HVAC.`,
			},
			{
				id: 1,
				description: `Gestión de recursos de manera eficiente, reducción de costos sin comprometer la calidad del trabajo.`,
			},
			{
				id: 2,
				description: `Entrega en tiempo y forma de lo establecido.`,
			},
			{
				id: 3,
				description: `Enfoque en la puntualidad y eficiencia en cada etapa del proceso.`,
			},
		],
		images: [
			'/images/projects/the-home-depot-escobedo-1.png',
			'/images/projects/the-home-depot-escobedo-2.png',
			'/images/projects/the-home-depot-escobedo-3.png',
			'/images/projects/the-home-depot-escobedo-4.png',
			'/images/projects/the-home-depot-escobedo-5.png',
			'/images/projects/the-home-depot-escobedo-6.png',
		],
	},
	{
		id: 4,
		name: `THE HOME DEPOT - HERMOSILLO`,
		slug: `the-home-depot-hermosillo`,
		durationLabel: `Mayo 2023 a Noviembre 2023.`,
		address: `Hermosillo, Sonora.`,
		customerDescription: `The Home Depot es una empresa minorista estadounidense de mejoras del hogar, ferretería, bricolaje y materiales de construcción.`,
		description: `El proyecto consistía en ejecutar las obras hidrosanitarias y de HVAC. Logramos llevarlas a cabo con precisión y eficacia según las especificaciones previstas por la constructora CATSA, la cual nos contrató para realizar esta hazaña.`,
		mbceComment: `Nuestra experiencia y compromiso se reflejaron en el éxito de la realización de estas obras, contribuyendo al avance y cumplimiento exitoso del proyecto The Home Depot en Hermosillo. Estamos agradecidos por la confianza depositada en nosotros por parte de CATSA y estamos comprometidos a seguir ofreciendo resultados de calidad en proyectos futuros.`,
		projects: [],
		images: [
			'/images/projects/the-home-depot-hermosillo-1.png',
			'/images/projects/the-home-depot-hermosillo-2.png',
			'/images/projects/the-home-depot-hermosillo-3.png',
		],
	},
];
