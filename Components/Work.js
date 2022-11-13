import ImageGalleryCards from '../JavaScript/ImageGalleryCards.js';
import InjectUI from '../JavaScript/injectUI.js';

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
];

const RepeatingheartSection = [
	{
		image: '',
		title: '',
		description: '',
	},
];

const Work = () => {
	InjectUI(ImageGalleryCards(LeisureSection), 'LeisureSection');
	InjectUI(ImageGalleryCards(RepeatingheartSection), 'RepeatingheartSection');
};

export default Work;
