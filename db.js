
const db = [

    {   id: 'ele1',
        nombre: 'Electronica Sanchez',
        direccion: 'Calle San luis de la Paz #24, Doctor Mora',
        extracto: 'Ventas de Equipos y Refacciones Electrónicas para Sonidos, Luces, TV, MP3, Computadoras, Etc.',
        telefono: '4681231545',
        whatsapp: '4681231545',
        facebook: 'electronicasanchezdoctormora',
        imagen: 'electronica-sanchez.jpg'
    },
    {   id: 'ele2',
        nombre: 'Dyxer Team',
        direccion: 'Av. Guanajuato #18',
        extracto: 'Diseño de paginas web',
        telefono: '4191389032',
        whatsapp: '4191389032',
        facebook: 'quizas92',
        imagen: 'logo.jpg'
    },
    {   id: 'mamalona01',
        nombre: 'La Mamalona Birria de Res Estilo Jalisco',
        direccion: 'Derramadero del Sauz, Doctor Mora',
        extracto: 'Deliciosa birria estilo jalisco, tacos blandos, dorados y quesabirrias, todos hechos con tortillas recien hechas a mano, en derramadero del sauz',
        telefono: '',
        whatsapp: '',
        facebook: 'profile.php?id=100081923708294',
        imagen: 'lamamalona.jpg',
        categoria: 'tacos',
        url: 'la-mamalona-birria-de-res-estilo-jalisco.html'
    },
    {   id: 'tacoslospanchos01',
        nombre: 'Tacos los Panchos',
        direccion: 'Calle Silao #46, Doctor Mora',
        extracto: '',
        telefono: '4191227225',
        whatsapp: '',
        facebook: '',
        imagen: 'pancho.svg',
        categoria: 'tacos',
        url: 'lospanchos.html'
    },
    {   id: 'eltacoveloz01',
        nombre: 'El Taco Veloz',
        direccion: 'Plazuela Unión s/n, Doctor Mora',
        extracto: '',
        telefono: '4191079402',
        whatsapp: '',
        facebook: '',
        imagen: 'speed.png',
        categoria: 'tacos',
        url: 'tacoveloz.html'
    },
    {   id: 'taqueria412',
        nombre: 'Taqueria 4/12',
        direccion: 'Calle Silao #40, Doctor Mora. Enfrente a la antena de Telmex',
        extracto: '',
        telefono: '4191811956',
        whatsapp: '',
        facebook: '',
        imagen: '412.jpg',
        categoria: 'tacos',
        url: 'taqueria412.html'
    },
    {   id: 'tacoskarkis01',
        nombre: 'Tacos el Karkis',
        direccion: 'Doctor Mora',
        extracto: '',
        telefono: '4191056532',
        whatsapp: '',
        facebook: '',
        imagen: 'taco.png',
        categoria: 'tacos',
        url: 'tacoselkarkis.html'
    },
    {   id: 'chascuis01',
        nombre: 'Taqueria CHASCUIS',
        direccion: 'Escalante. Enfrente del Campo DE FUTBOL',
        extracto: '',
        telefono: '4191382655',
        whatsapp: '',
        facebook: '',
        imagen: 'chascuis.png',
        categoria: 'tacos',
        url: 'chascuis.html'
    },
    {   id: 'bulldogdinners01',
        nombre: 'Bulldogs Dinner',
        direccion: 'Camino a Moris, Doctor Mora. A unos metros del Bazar Doctor Mora',
        extracto: '',
        telefono: '4191183538',
        whatsapp: '',
        facebook: '',
        imagen: 'bulldogsdinner.jpg',
        categoria: 'tacos',
        url: 'bulldogs-dinner.html'
    },
    {   id: 'viejon01',
        nombre: 'Tacos "El Viejón"',
        direccion: 'Carretera Doctor Mora al Escalante',
        extracto: '',
        telefono: '4191238790',
        whatsapp: '',
        facebook: '',
        imagen: 'anciano.png',
        categoria: 'tacos',
        url: 'tacos-el-viejon.html'
    }

]
           
       







// const negocios = [

// 	{
// 		id: 'neg01',
// 		nombre: 'tienda 1',
// 		direccion: 'primera direccion',
// 		telefono: '419'
// 	},
// /*
// 	{
// 		id: 'neg02',
// 		nombre: 'tienda 2',
// 		direccion: 'segunda direccion',
// 		telefono: '4222',
// 		whatsapp: '4191389032',
// 		servicios: [
// 			{
// 				id: 'papeleria',
// 				tareas : [{nombre: 'cortar papel', id: 'papeleria'}, {nombre: 'triturar hojas', id: 'papleria'}, {nombre: 'colorear hojas', id: 'papeleria'} ]
// 			},
// 			{
// 				id: 'celular',
// 				tareas : [{nombre: 'reparar celular', id: 'celular'}, {nombre: 'pegar celular', id: 'celular'}, {nombre: 'entregar', id: 'celular'} ]
// 			},

// 		]
			
// 		},
	

// */
// 	{
// 		id: 'neg02',
// 		nombre: 'tienda 2',
// 		direccion: 'segunda direccion',
// 		telefono: '4222',
// 		whatsapp: '4191389032',
// 		servicios: [
// 			{
// 				id: 'papeleria',
// 				tarea: ['cortar papel', 'pegar papel', 'triturar papel', 'colorear hojas', 'pintar hojas', 'pagina hojas' ],
// 			},
// 			{
// 				id: 'celular',
// 				tarea: ['recargar celular', 'romper celular', 'limpiar celular' ],
// 			},
// 			{
// 				id: 'series',
// 				tarea: ['pagar mensualidad', 'contratar servicio' ],
// 			},
// 			{
// 				id: 'peliculas',
// 				tarea: ['comprar dvd', 'reproducir dvd', 'guardar dvd' ],
// 			},

// 		]
			
// 		},
	


// 	{
// 		id: 'neg03',
// 		nombre: 'tienda 3',
// 		direccion: 'tercera direccion',
// 		telefono: '112',
// 		whatsapp: 'xxx',
// 		servicios: [
// 			{
// 				id: 'xxx',
// 				tarea: ['jaja', 'meee', 'cuas' ],
// 			},
// 			{
// 				id: 'xx',
// 				tarea: ['vbv', 'vvvvv', 'ssss' ],
// 			},
// 			{
// 				id: 'xxxd',
// 				tarea: ['ttt', 'tttt', 'tttt' ],
// 			},

// 		]
// 	}





// ]