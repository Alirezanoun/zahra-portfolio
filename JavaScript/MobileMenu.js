function MobileMenu() {
	const menu = document.querySelector('#mobile-menu')
	const navContainer = document.querySelector('.navbar__container')

	// Display Mobile Menu
	const menuClickHandler = () => {
		menu.classList.toggle('is-active')

		const isActiveClass = menu.classList.contains('is-active')

		if (isActiveClass) {
			navContainer.classList.add('navbar__container__active')
			navContainer.classList.remove('navbar__container__inactive')
		}

		if (!isActiveClass) {
			navContainer.classList.add('navbar__container__inactive')
			navContainer.classList.remove('navbar__container__active')
		}
	}

	menu.addEventListener('click', menuClickHandler)
}

export default MobileMenu
