import React from "react";

function Header() {
  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">
              portfolio<em>React</em>
            </a>
          </h1>
        </div>
        <nav className="header__nav" role="navigation" aria-label="main menu">
          <ul>
            <li>
              <a href="#intro">intro</a>
            </li>
            <li>
              <a href="#skill">skill</a>
            </li>
            <li>
              <a href="#site">site</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded="false"
          role="button"
          tabindex="0"
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
