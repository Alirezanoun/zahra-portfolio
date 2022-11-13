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

const Work = () => {
	InjectUI(ImageGalleryCards(LeisureSection), 'LeisureSection')
}

export default Work
