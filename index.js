import InjectUI from './JavaScript/injectUI.js';
import ScrollAnimation from './JavaScript/ScrollAnimation.js';
import MobileMenu from './JavaScript/MobileMenu.js';
import Navbar from './Components/Navbar.js';

window.addEventListener('DOMContentLoaded', () => {
	InjectUI(Navbar, 'navigation-bar');
	MobileMenu();
});

window.addEventListener('scroll', ScrollAnimation);
