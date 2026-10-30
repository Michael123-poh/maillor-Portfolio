
import { useState } from "react";
import "./About.css";

const aboutItems = [
  {
    number: "01",
    label: "EXPERIENCE",
    title: "Quatre ans de code, \nzéro solution générique.",
    description:
      "Diplômé en génie logiciel à IUT de Douala, Mon expérience commence dès ma deuxième années universitair, chez CB Wonder ou j'occupais le poste de responsables des sytèmes informatique...",
    side: "left",
  },
  {
    number: "02",
    label: "BACKGROUND",
    title: "Avant de construire, \nj'ai appris à réparer.",
    description:
      "Mon parcours n'a pas commencé par une ligne de code, mais par le terrain : support informatique, administration systèmes, pannes résolues à la chaîne. C'est cette exigence-là : comprendre un système jusqu'à ses racines avant d'y toucher qui m'a naturellement mené vers...",
    side: "right",
  },
  {
    number: "03",
    label: "SPÉCIALITÉ",
    title:
      "Je ne construis pas des interfaces. \nJe construis des raisons de rester.",
    description:
      "Je conçois des sites et des applications, mais me contenter de coder ce qui est demandé ne m'intéresse pas. Ma spécialité, c'est de creuser sous le besoin exprimé pour trouver ce qu'il cache vraiment : une émotion, une histoire, une intention que le client porte sans...",
    side: "left",
  },
  {
    number: "04",
    label: "BACKGROUND",
    title: "Avant de construire, \n j'ai appris à réparer.",
    description:
      "Mon parcours n'a pas commencé par une ligne de code, mais par le terrain : support informatique, administration systèmes, pannes résolues à la chaîne.",
    side: "right",
  },
];

function AboutItem({ number, label, title, description, side }) {
  return (
    <article className={`about-item about-item--${side}`}>
      <div className="about-number">
        <span className="about-number-text">{number}</span>
      </div>

      <div className="about-copy about-reveal">
        <h3>
          <span className="about-label">{label} :</span>{" "}
          <span className="about-title">{title}</span>
        </h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

function About() {
  const [isLit, setIsLit] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  // Active uniquement pendant le changement d'état : l'ampoule glisse alors vers
  // sa nouvelle position, mais ne « traîne » pas quand on redimensionne la fenêtre.
  const [isMoving, setIsMoving] = useState(false);

  function handlePull() {
    if (isPulling) return;

    setIsPulling(true);

    // La lumière change pendant que le cordon bouge.
    setIsLit((current) => !current);

    setIsMoving(true);

    window.setTimeout(() => {
      setIsPulling(false);
    }, 450);

    window.setTimeout(() => {
      setIsMoving(false);
    }, 750);
  }

  return (
    <section
      className={`about-section ${isLit ? "is-lit" : "is-dark"} ${
        isMoving ? "is-moving" : ""
      }`}
      id="apropos"
    >
      
      {/* ÉCRAN INITIAL : LUMIÈRE ÉTEINTE */}
      <div className="about-intro" aria-hidden={isLit}>
        <h2 className="about-intro-heading">
          <span className="about-heading-line">
            <span className="about-heading-lead">
              <span className="about-heading-word">UNE</span>
              <span className="about-accent">IDÉE</span>
            </span>
            <span className="about-heading-light">DE</span>
          </span>

          <span className="about-heading-line about-heading-name">
            <span className="about-heading-word">MA</span>
            <span>PERSONNE</span>
          </span>
        </h2>

        <p className="about-intro-label">
          QUI
          <br />
          SUIS-JE
        </p>
      </div>

      {/* AMPOULE : ELLE RESTE VISIBLE DANS LES DEUX ÉTATS
          (une image pour le mode sombre, une pour le mode clair) */}
      <img
        className="about-lamp about-lamp--left about-lamp--dark"
        src="/images/Ampoule transparente à filament vintage.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="about-lamp about-lamp--left about-lamp--light"
        src="/images/ampoule.png"
        alt=""
        aria-hidden="true"
      />

      {/* CORDON CLIQUABLE */}
      <button
        className={`about-pull-cord ${isPulling ? "is-pulling" : ""}`}
        type="button"
        onClick={handlePull}
        aria-label={
          isLit
            ? "Tirer sur le cordon pour éteindre la lumière"
            : "Tirer sur le cordon pour allumer la lumière"
        }
        aria-pressed={isLit}
      >
        <img src="/images/tire_ampoule.png" alt="" />
        {/* Signal discret autour du pompon (mode sombre uniquement) */}
        <span className="about-pull-signal" aria-hidden="true" />
      </button>

      {/* ÉCRAN FINAL : À PROPOS
          Les numéros sont toujours affichés (même place dans les deux états) :
          seuls les textes apparaissent quand la lumière s'allume. */}
      <div
        className="about-main-content"
        aria-hidden={!isLit}
        inert={!isLit}
      >
        <h2 className="about-heading about-reveal">
          <span className="about-heading-line">
            <span className="about-heading-lead">
              <span className="about-heading-word about-accent">HEY!</span>
              <span>JE</span>
            </span>
            <span className="about-heading-light">SUIS</span>
          </span>

          <span className="about-heading-line about-heading-name">
            <span className="about-heading-word">YVES</span>
            <span>MICHAEL M.</span>
          </span>
        </h2>

        <div className="about-grid">
          {aboutItems.map((item) => (
            <AboutItem key={item.number} {...item} />
          ))}
        </div>

        <div className="about-reveal about-button-wrap">
          <a className="about-button" href="#contact">
            EN SAVOIR PLUS
            <span aria-hidden="true">◉</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
