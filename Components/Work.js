import ImageGalleryCards from '../JavaScript/ImageGalleryCards.js'
import InjectUI from '../JavaScript/injectUI.js'

const LeisureSection = [
	{
		image: './img/Outofstateillustration.png',
		title: 'LEISURE',
		description: 'EXAMPLE',
	},
	{
		image: './img/lollipop.png',
		title: 'LOLLIPOP SWIRL',
		description: 'EXAMPLE',
	},
]

const WorkLeftColumn = [
	{
		image: './img/3DHearts.png',
		title: 'REPEATING HEARTS',
		description: '3D',
	},
	{
		image: '',
		title: '',
		description: '',
	},
	{
		image: '',
		title: '',
		description: '',
	},
	{
		image: '',
		title: '',
		description: '',
	},
]

const WorkRightColumn = [
	{
		image: './img/11C3E92A-533A-452B-AF65-E534D195D13D.png',
		title: 'MINI SUSHI',
		description: '3D shapes',
	},
	{
		image: '',
		title: '',
		description: '',
	},
	{
		image: '',
		title: '',
		description: '',
	},
	{
		image: '',
		title: '',
		description: '',
	},
]

const Work = () => {
	InjectUI(ImageGalleryCards(LeisureSection), 'LeisureSection')
	InjectUI(ImageGalleryCards(WorkLeftColumn), 'WorkLeftColumn', '2 columns')
	InjectUI(ImageGalleryCards(WorkRightColumn), 'WorkRightColumn', '2 columns')
}

export default Work
