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

      {/* Mobile uniquement : nuages dans le ciel, au-dessus du titre */}
      <div className="hero-clouds" aria-hidden="true">
        <img className="hero-cloud hero-cloud--thick-1" src="/images/nuage epais.png" alt="" />
        <img className="hero-cloud hero-cloud--thick-2" src="/images/nuage epais.png" alt="" />
        <img className="hero-cloud hero-cloud--thin-1" src="/images/petit nuage fin.png" alt="" />
        <img className="hero-cloud hero-cloud--thin-2" src="/images/petit nuage fin.png" alt="" />
        <img className="hero-cloud hero-cloud--thin-3" src="/images/petit nuage fin.png" alt="" />
      </div>

      {/* Mobile uniquement : eau avec reflet, sous les pieds de l'homme (image en fond dans le CSS) */}
      <div className="hero-water" aria-hidden="true" />

      {/* Le grand titre */}
      <h1 className="hero-title">
        <span className="title-line">
          UNE <br className="hero-br" />IMMERSI<span className="hero-o">O</span>N
        </span>

        <span className="title-line">
          AU-DELÀ DU RÉEL
        </span>
      </h1>

      {/* Mobile uniquement : l'homme assis seul (sur PC il fait partie de l'image de fond) */}
      <div className="hero-man" aria-hidden="true">
        <img src="/images/Homme pensif en chaise moderne.png" alt="" />
      </div>

      {/* Sur PC ce bloc ne crée pas de boîte (display: contents) ;
          sur mobile il regroupe les textes à droite, au niveau des pieds */}
      <div className="hero-info">
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

          <a href="#projets" className="projects-button">
            MES PROJETS
            <span aria-hidden="true">◉</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;