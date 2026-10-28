import "./Hero.css";

function Hero() {
  return (
    <section className="hero-frame" id="accueil">
      {/* Notre image de fond */}
      <img
        className="hero-image"
        src="/images/ImageHero.png"
        alt=""
      />

      {/* Le grand titre */}
      <h1 className="hero-title">
        <span className="title-line">
          UNE IMMERSI<span className="hero-o">O</span>N
        </span>

        <span className="title-line">
          AU-DELÀ DU RÉEL
        </span>
      </h1>

      {/* Les spécialités dans le creux de la forme */}
      <p className="hero-services">
        WEB DESIGN
        <br />
        DÉVELOPPEMENT
        <br />
        UX/UI DESIGN
      </p>

      {/* Le nom et le bouton */}
      <div className="hero-signature">
        <p className="hero-firstname">YVES</p>
        <h2 className="hero-name">MAILLORE</h2>

        <a href="projets" className="projects-button">
          MES PROJETS
          <span aria-hidden="true">◉</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;