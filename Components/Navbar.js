const Navbar = `
    <nav class="navbar">
      <div class="navbar__container">
        <a href="./index.html" id="navbar__logo2"></a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="right-side">
         <li class="navbar__item">
            <a href="#about" class="navbar__links" id="about-page">ABOUT</a>
          </li>
          <li class="navbar__item">
            <a href="#work" class="navbar__links" id="work-page">WORK</a>
            <div class="sub-menu-1">
          <ul>
          <li><a href="#" class="drop">BRANDS</li>
          <li><a href="#" class="drop">POSTERS</li>
          <li><a href="#" class="drop">ILLUSTRATIONS</li>
          </ul>
          </div>
          </li>
          </ul>
          <ul class="left-side">
          <li class="navbar__item">
            <a href="https://www.instagram.com/zgraphicals/" target="_blank" class="navbar__links" id="insta">INSTAGRAM</a>
          </li>
          <li class="navbar__item">
            <a href="./contact.html" class="navbar__links" id="work-page">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>`;

export default Navbar;
