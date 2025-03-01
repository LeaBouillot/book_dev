import React from "react";

import { footerIcon } from "../constants";

function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      {/* <div className="footer__inner">
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
                    <img src={footer.icon} alt={footer.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>&copy; 2024 Designed by Léa Bouillot</div>
      </div> */}
    </footer>
  );
}

export default Footer;
