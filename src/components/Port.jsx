import React from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Port() {
  return (
    <section id="port">
      <div className="" port__inner>
        <div className="" port__title>
          Portfolio
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key}>
              <span className="num">{port.num}.</span>
              <a
                href={port.code}
                target="_blank"
                className="img"
                rel="noreferrer"
              >
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a
                href={port.view}
                target="_blank"
                className="site"
                rel="noreferrer"
              >
                Voir le site
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Port;
