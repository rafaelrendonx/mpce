export const mpceContactPeople = [
	{
		id: 0,
		name: 'Ing. Jesús Fernando Ocampo Moreno',
		phoneNumber: '(662) 466-9086',
		phoneWhatsapp: '+526624669086',
		email: 'jesusocampo@mpce.mx',
	},
	{
		id: 1,
		name: 'Lic. Rubén Antonio Ocampo Moreno',
		phoneNumber: '(662) 107-8845',
		phoneWhatsapp: '+526621078845',
		email: 'rubenantonioom@mpce.mx',
	},
	{
		id: 2,
		name: 'Ing. Rubén Arturo Ocampo Ramírez',
		phoneNumber: '(662) 100-6960',
		phoneWhatsapp: '+526611006960',
		email: 'rubenarturo@prodigy.net.mx',
	},
];

export const mpceAddress =
	'Av. Juan Romero, Col. Arco Iris C.P. 83285 Hermosillo, Sonora, México';

export const mpceServices = [
	{
		id: 0,
		name: 'Construcción',
		icon: '/icons/construction.svg',
		details: [
			{
				id: 0,
				name: 'Obra eléctrica',
				description: 'La construcción de obra eléctrica implica la planeación y ejecución de proyectos eléctricos en baja, media y alta tensión.',
			},
			{
				id: 1,
				name: 'Proyectos de obra civil y obra pública',
				description: 'Proyectos infraestructuras y construcción de carreteras, puentes, presas, alcantarillados, edificios.',
			},
		],
	},
	{
		id: 1,
		name: 'Instalación y Mantenimiento',
		icon: '/icons/maintenance.svg',
		details: [
			{
				id: 0,
				name: 'Electricidad',
				description: 'Instalación y mantenimiento de equipo eléctrico necesario para generación, distribución y uso de electricidad.',
				details: [
					{
						id: 0,
						name: 'Generadores eléctricos',
					},
					{
						id: 1,
						name: 'Media y baja tensión',
					},
					{
						id: 2,
						name: 'Motores de diesel',
					},
					{
						id: 3,
						name: 'Plantas de emergencia',
					},
					{
						id: 4,
						name: 'Transformadores',
					},
				],
			},
			{
				id: 1,
				name: 'HVAC',
				description: 'Instalación y mantenimiento de sistemas de calefacción, ventilación y aire acondicionado.',
				details: [
					{
						id: 0,
						name: 'Aires acondicionados',
					},
					{
						id: 1,
						name: 'Extractores industriales',
					},
				],
			},
			{
				id: 2,
				name: 'Plomería',
				description: 'Colocación y mantenimiento de tuberías, accesorios y dispositivos para transportar agua potable y evacuar aguas residuales.',
				details: [
					{
						id: 0,
						name: 'Tubería hidraúlica y sanitaria',
					},
					{
						id: 1,
						name: 'Bombas e hidroneumáticos',
					},
					{
						id: 2,
						name: 'Sanitarios y lavamanos',
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Suministro y Venta',
		icon: '/icons/sales.svg',
		details: [
			{
				id: 0,
				name: 'Aires acondicionados',
				description: 'Diferentes capacidades y tecnologías.',
			},
			{
				id: 1,
				name: 'Extractores industriales',
				description: 'Diseñados para eliminar contaminantes del aire, como humos, gases, vapores y partículas en suspensión.',
			},
			{
				id: 2,
				name: 'Plantas de emergencia',
				description: 'Diferentes capacaidades para garantizar la continuidad de los servicios en caso de una falla en la red eléctrica principal.',
			},
			{
				id: 3,
				name: 'Transformadores',
				description: 'Equipos claves para la distribución y transmisión de energía eléctrica.',
			},
		],
	},
	{
		id: 3,
		name: 'Y más',
		icon: '/icons/various.svg',
		details: [
			{
				id: 0,
				name: 'Varios',
				description: 'Nos adaptamos a las necesidades del proyecto o lo que necesite',
			},
		],
	},
];
