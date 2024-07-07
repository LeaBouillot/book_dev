import React from "react";

const skillText = [
  {
    title:
      "En cours: TP Concepteur Développeur d'Applications de niveau 6 à PREPAVENIR FORMATION France",
    desc: "Compétences en cours d'acquisition : JavaScript · React · Node.js · PHP · SQL · Framework Symfony",
  },
  {
    title: "Titre Profesionelle RNCP Graphiste & Web Designer",
    desc: "Figma, Adobe Creative Suite. Design d’interface utilisateur. WordPress Developer",
  },
  {
    title: "Mes motivations",
    desc: "Je suis très motivée et impatiente de mettre en pratique mes connaissances dans un environnement professionnel stimulant à votre équipe.",
  },
];

function Skill() {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">Challenge</h2>

        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
