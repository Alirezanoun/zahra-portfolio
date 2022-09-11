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
