import React from "react";

const footerIcon = [
  {
    icon: "https://api.iconify.design/akar-icons:github-fill.svg",
    link: "https://github.com/bestdevelope",
  },
  {
    icon: "https://api.iconify.design/skill-icons:linkedin.svg",
    link: "https://www.linkedin.com/in/léa-bouillot-0430b2253/",
  },
];
function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>bestdevelope</div>
          <div>@webs</div>
        </h2>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">se connecter</a>
            </div>
            <p className="desc">Recevez news lettres</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerIcon.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link} target="_blank" rel="noreferrer">
                    {footer.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>&copy; 2024 Designed by Léa Bouillot</div>
      </div>
    </footer>
  );
}

export default Footer;
