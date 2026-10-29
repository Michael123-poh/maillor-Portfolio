import "./Projects.css";

const projects = [
  {
    id: "gaia",
    name: "GAIA",
    category: "SITE VITRINE",
    image: "/images/gaia.png",
    alt: "Aperçu du projet GAIA",
    url: "https://gaiaimagine.com/",
    position: "left-top",
  },
  {
    id: "homey",
    name: "HOMEY SPACE",
    category: "APPLICATION WEB",
    image: "/images/homey.png",
    alt: "Aperçu du projet HOMEY SPACE",
    url: "https://homey-space.vercel.app/",
    position: "left-bottom",
  },
  {
    id: "mag",
    name: "MAG",
    category: "APPLICATION WEB",
    image: "/images/MAG.png",
    alt: "Aperçu du projet MAG",
    // pas encore de lien pour MAG : la carte n'est pas cliquable
    position: "right-tall",
  },
];

function ProjectCard({ name, category, image, alt, url, position }) {
  // Avec un lien, la zone image devient un lien (nouvel onglet) ; sans lien, un simple bloc
  const Media = url ? "a" : "div";
  const linkProps = url
    ? {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Voir le projet ${name} (nouvel onglet)`,
      }
    : {};

  return (
    <article className={`project-card project-card--${position}`}>
      <Media className="project-media" {...linkProps}>
        <img className="project-image" src={image} alt={alt} />

        <div className={`project-badge project-badge--${position}`}>
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
      </Media>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projets">
      <header className="projects-header">
        <h2 className="projects-heading">
          <span className="projects-heading-line">
            <span>LE</span>
            <span className="projects-space"> </span>
            <span className="projects-accent">FRUIT</span>
          </span>

          <span className="projects-heading-line projects-heading-second">
            <span>DE MES</span>
            <span className="projects-heading-small">MAINS</span>

            <img
              className="projects-sprout"
              src="/images/bourgeons.png"
              alt=""
              aria-hidden="true"
            />
          </span>
        </h2>

        <a className="projects-all-button" href="#projets">
          TOUT VOIR
          <span aria-hidden="true">◉</span>
        </a>
      </header>

      <div className="projects-grid">
        <div className="projects-left-column">
          <ProjectCard {...projects[0]} />
          <ProjectCard {...projects[1]} />
        </div>

        <ProjectCard {...projects[2]} />
      </div>

      <div className="projects-footer-row">
        <p className="projects-footer">
          VOTRE PROJET PEUT LUI AUSSI PORTER SES FRUITS
        </p>

        <img
          className="projects-apple"
          src="/images/pomme.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default Projects;
