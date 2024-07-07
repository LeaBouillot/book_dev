import React from "react";

const contactText = [
  {
    link: "https://my-site.com/contact",
    title: "MY site",
  },
  {
    link: "mailto: leabouillot7@gmail.com",
    title: "mail: leabouillot",
  },
];

function Contact() {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contactez-moi</h2>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a
                  href={contact.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
