const Navbar = `
    <nav class="navbar">
    <div class="logo_area" href="./index.html">
    <a href="./index.html"><img src="./img/favicon.png" width="100" height="80"/></a>
    </div>
      <div class="navbar__container">
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
          <li><a href="#" class="drop">ANIMATIONS</li>
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
