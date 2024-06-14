// Assets
import { ActionSVG } from '../../assets/svg/categories/ActionSVG.jsx'
import { AdventureSVG } from '../../assets/svg/categories/AdventureSVG.jsx'
import { ArtSVG } from '../../assets/svg/categories/ArtSVG.jsx'
import { ChildSVG } from '../../assets/svg/categories/ChildSVG.jsx'
import { ComicsSVG } from '../../assets/svg/categories/ComicsSVG.jsx'
import { EducationSVG } from '../../assets/svg/categories/EducationSVG.jsx'
import { FantasySVG } from '../../assets/svg/categories/FantasySVG.jsx'
import { HistorySVG } from '../../assets/svg/categories/HistorySVG.jsx'
import { MangaSVG } from '../../assets/svg/categories/MangaSVG.jsx'
import { MusicSVG } from '../../assets/svg/categories/MusicSVG.jsx'
import { ReligionSVG } from '../../assets/svg/categories/ReligionSVG.jsx'
import { ScienceSVG } from '../../assets/svg/categories/ScienceSVG.jsx'

export const categories = [
	{
		name: 'Action',
		icon: ActionSVG,
		first: true,
		selected: false,
	},
	{
		name: 'Adventure',
		icon: AdventureSVG,
		selected: false,
	},
	{
		name: 'Art',
		icon: ArtSVG,
		selected: false,
	},
	{
		name: "Children's",
		icon: ChildSVG,
		selected: false,
	},
	{
		name: 'Comics',
		icon: ComicsSVG,
		selected: false,
	},
	{
		name: 'Education',
		icon: EducationSVG,
		selected: false,
	},
	{
		name: 'Fantasy',
		icon: FantasySVG,
		selected: false,
	},
	{
		name: 'History',
		icon: HistorySVG,
		selected: false,
	},
	{
		name: 'Manga',
		icon: MangaSVG,
		selected: false,
	},
	{
		name: 'Music',
		icon: MusicSVG,
		selected: false,
	},
	{
		name: 'Religion',
		icon: ReligionSVG,
		selected: false,
	},
	{
		name: 'Science',
		icon: ScienceSVG,
		last: true,
		selected: false,
	},
]

export const books = [
	{
		id: 1,
		ISBN: '978-1234567890',
		titulo: 'Cien años de soledad',
		autor: 'Gabriel García Márquez',
		rating: 4.5,
		sinopsis:
			'Una saga familiar que narra siete generaciones de la familia Buendía en el pueblo ficticio de Macondo.',
		cantidad: 10,
		idioma: 'español',
		categoria: 'realismo mágico',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 2,
		ISBN: '978-0062437879',
		titulo: 'El Señor de los Anillos',
		autor: 'J.R.R. Tolkien',
		rating: 5.0,
		sinopsis:
			'Una épica fantasía que narra la aventura de Frodo Bolsón para destruir el Anillo Único.',
		cantidad: 8,
		idioma: 'inglés',
		categoria: 'fantasía épica',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 3,
		ISBN: '978-0140399472',
		titulo: 'Orgullo y prejuicio',
		autor: 'Jane Austen',
		rating: 4.2,
		sinopsis:
			'Una novela romántica que sigue la historia de Elizabeth Bennet y su búsqueda del amor verdadero.',
		cantidad: 15,
		idioma: 'inglés',
		categoria: 'romance',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 4,
		ISBN: '978-0743273565',
		titulo: '1984',
		autor: 'George Orwell',
		rating: 4.7,
		sinopsis:
			'Una novela distópica que describe una sociedad totalitaria controlada por un Gran Hermano.',
		cantidad: 6,
		idioma: 'inglés',
		categoria: 'ciencia ficción distópica',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 5,
		ISBN: '978-0316747762',
		titulo: 'El guardián entre el centeno',
		autor: 'J.D. Salinger',
		rating: 4.6,
		sinopsis:
			'Una novela coming-of-age que narra la historia de Holden Caulfield y su desilusión con el mundo adulto.',
		cantidad: 9,
		idioma: 'inglés',
		categoria: 'novela de madurez',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 6,
		ISBN: '978-0393088076',
		titulo: 'Cumbres borrascosas',
		autor: 'Emily Brontë',
		rating: 4.8,
		sinopsis:
			'Una novela gótica que narra la apasionada y trágica historia de amor entre Heathcliff y Catherine Earnshaw.',
		cantidad: 12,
		idioma: 'inglés',
		categoria: 'novela gótica',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 7,
		ISBN: '978-0451524935',
		titulo: 'Matar a un ruiseñor',
		autor: 'Harper Lee',
		rating: 4.9,
		sinopsis:
			'Una novela que explora los temas del racismo y la injusticia en el sur de Estados Unidos.',
		cantidad: 7,
		idioma: 'inglés',
		categoria: 'drama',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 8,
		ISBN: '978-0451524935',
		titulo: 'Matar a un ruiseñor',
		autor: 'Harper Lee',
		rating: 4.9,
		sinopsis:
			'Una novela que explora los temas del racismo y la injusticia en el sur de Estados Unidos.',
		cantidad: 7,
		idioma: 'inglés',
		categoria: 'drama',
		imagenURL: 'https://picsum.photos/300',
	},
	{
		id: 9,
		ISBN: '978-0451524935',
		titulo: 'Matar a un ruiseñor',
		autor: 'Harper Lee',
		rating: 4.9,
		sinopsis:
			'Una novela que explora los temas del racismo y la injusticia en el sur de Estados Unidos.',
		cantidad: 7,
		idioma: 'inglés',
		categoria: 'drama',
		imagenURL: 'https://picsum.photos/300',
	},
]
