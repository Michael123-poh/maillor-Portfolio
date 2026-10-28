import { useState } from "react";
import "./Services.css";

const services = [
  {
    id: "web",
    title: "Web design",
    image: "/images/service-web.png",
    description:
      "Je conçois des sites web élégants, intuitifs et adaptés à tous les écrans, avec une attention particulière portée à l'expérience utilisateur.",
  },
  {
    id: "mobile",
    title: "Dev mobile",
    image: "/images/service-mobile.png",
    description:
      "Je développe des expériences mobiles pensées pour être fluides, utiles et agréables à utiliser au quotidien.",
  },
  {
    id: "uiux",
    title: "UI/UX",
    image: "/images/service-uiux.png",
    description:
      "Je transforme les besoins des utilisateurs en interfaces claires, cohérentes et faciles à prendre en main.",
  },
  {
    id: "devops",
    title: "Devops",
    image: "/images/service-devops.png",
    description:
      "J'organise les déploiements et les outils techniques pour rendre les applications plus fiables et plus simples à maintenir.",
  },
];

function ServiceCard({ service, isActive, onActivate }) {
  return (
    <article
      className={`service-card ${isActive ? "is-active" : ""}`}
      tabIndex={0}
      aria-expanded={isActive}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <h3 className="service-title">{service.title}</h3>

      <div className="service-visual">
        <img
          src={service.image}
          alt=""
          aria-hidden="true"
        />
      </div>

      <p className="service-description">
        {service.description}
      </p>

      <span className="service-more">
        {isActive ? "less" : "more"}
      </span>
    </article>
  );
}

function Services() {
  const [activeService, setActiveService] = useState("web");

  return (
    <section className="services-section" id="services">
      <header className="services-header">
        <h2 className="services-heading">
          <span>
            MES <span className="services-accent">COMPÉTENCES</span>
          </span>
          <span>À VOTRE SERVICE...</span>
        </h2>

        <p className="services-intro">PERITIA IN SERVITIO</p>
      </header>

      <div
        className="services-grid"
        onMouseLeave={() => setActiveService("web")}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={activeService === service.id}
            onActivate={() => setActiveService(service.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
