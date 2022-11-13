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

const WorkLeftColumn = [
	{
		image: './img/3DHearts.png',
		title: 'REPEATING <br /> HEARTS',
		description: '3D',
	},
	{
		image: './img/cupofteagif.gif',
		title: 'CUP OF TEA',
		description: 'Boroji Design Inc. Company',
	},
	{
		image: './img/basketball.jpg',
		title: 'LDH SCHOOL <br />COMPETITION',
		description: 'Basketball competition',
	},
	{
		image: './img/47BF6D95-A3F4-40AF-8FF6-5C1A2469B016.png',
		title: 'SWIRVY CLICKS',
		description: 'A nail design brand',
	},
];

const WorkRightColumn = [
	{
		image: './img/11C3E92A-533A-452B-AF65-E534D195D13D.png',
		title: 'MINI SUSHI',
		description: '3D shapes',
	},
	{
		image: './img/BandGIF.gif',
		title: 'EXAMPLE',
		description: 'Example',
	},
	{
		image: './img/busted.jpg',
		title: 'BUSTED',
		description: 'Movie poster',
	},
	{
		image: './img/E438EA40-5D8D-4760-B570-847506516832.png',
		title: 'SWIRVY CLICKS',
		description: 'Business card',
	},
];

const Work = () => {
	InjectUI(ImageGalleryCards(LeisureSection), 'LeisureSection');
	InjectUI(ImageGalleryCards(WorkLeftColumn), 'WorkLeftColumn', '2 columns');
	InjectUI(ImageGalleryCards(WorkRightColumn), 'WorkRightColumn', '2 columns');
};

export default Work;
