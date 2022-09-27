import InjectUI from './JavaScript/injectUI.js';
import ScrollAnimation from './JavaScript/ScrollAnimation.js';
import MobileMenu from './JavaScript/MobileMenu.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

window.addEventListener('DOMContentLoaded', () => {
	InjectUI(Navbar, 'navigation-bar');
	InjectUI(Footer, 'footer-copyright');
	MobileMenu();
});

window.addEventListener('scroll', ScrollAnimation);

const options = {
	bottom: '64px', // default: '32px'
	right: 'unset', // default: '32px'
	left: '32px', // default: 'unset'
	time: '0.5s', // default: '0.3s'
	mixColor: '#fff', // default: '#fff'
	backgroundColor: '#fff', // default: '#fff'
	buttonColorDark: '#100f2c', // default: '#100f2c'
	buttonColorLight: '#fff', // default: '#fff'
	saveInCookies: true, // default: true,
	label: '<img src="./img/469E99D3-9F25-4C33-AC9A-F3169663D9D6.png" width="30px" />', // default: ''
	autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
