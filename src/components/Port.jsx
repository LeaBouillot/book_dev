import React from "react";

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";

const portText = [
  {
    num: "01",
    title: "Portfolio1",
    desc: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus laudantium ipsa quam. Expedita voluptas pariatur sint veniam saepe consectetur, quas repudiandae doloribus porro dolorem architecto ipsam quam inventore itaque.",
    img: port01,
    code: "https://github.com/bestdevelope/my-portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "React*Portfolio",
  },
  {
    num: "02",
    title: "Portfolio1",
    desc: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus laudantium ipsa quam. Expedita voluptas pariatur sint veniam saepe consectetur, quas repudiandae doloribus porro dolorem architecto ipsam quam inventore itaque.",
    img: port02,
    code: "https://github.com/bestdevelope/my-portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "React*Portfolio",
  },
  {
    num: "03",
    title: "Portfolio1",
    desc: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus laudantium ipsa quam. Expedita voluptas pariatur sint veniam saepe consectetur, quas repudiandae doloribus porro dolorem architecto ipsam quam inventore itaque.",
    img: port03,
    code: "https://github.com/bestdevelope/my-portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "React*Portfolio",
  },
  {
    num: "04",
    title: "Portfolio1",
    desc: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus laudantium ipsa quam. Expedita voluptas pariatur sint veniam saepe consectetur, quas repudiandae doloribus porro dolorem architecto ipsam quam inventore itaque.",
    img: port04,
    code: "https://github.com/bestdevelope/my-portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "React*Portfolio",
  },
  {
    num: "05",
    title: "Portfolio1",
    desc: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus laudantium ipsa quam. Expedita voluptas pariatur sint veniam saepe consectetur, quas repudiandae doloribus porro dolorem architecto ipsam quam inventore itaque.",
    img: port05,
    code: "https://github.com/bestdevelope/my-portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "React*Portfolio",
  },
  {
    num: "06",
    title: "Portfolio1",
    desc: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus laudantium ipsa quam. Expedita voluptas pariatur sint veniam saepe consectetur, quas repudiandae doloribus porro dolorem architecto ipsam quam inventore itaque.",
    img: port06,
    code: "https://github.com/bestdevelope/my-portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "React*Portfolio",
  },
];

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
