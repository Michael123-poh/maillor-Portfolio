
import "./Footer.css";

const footerItems = [
  {
    id: "talk",
    firstLine: "Let's",
    secondLine: "Talk",
    image: "/images/lets_talk (2).png",
    alt: "Deux personnes échangeant autour d'un projet",
    href: "#contact",
  },
  {
    id: "work",
    firstLine: "My",
    secondLine: "Work",
    image: "/images/my_work (2).png",
    alt: "Une personne travaillant sur un projet",
    href: "#projets",
  },
  {
    id: "about",
    firstLine: "About",
    secondLine: "Me",
    image: "/images/about_me (2).png",
    alt: "Illustration représentant la section À propos",
    href: "#apropos",
  },
  {
    id: "home",
    firstLine: "Get",
    secondLine: "Home",
    image: "/images/get_home (2).png    ",
    alt: "Illustration représentant le retour à l'accueil",
    href: "#top",
  },
];

const socials = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/",
  },
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
        />
        <circle cx="12" cy="12" r="4" />
        <circle
          className="social-icon-dot"
          cx="18"
          cy="6"
          r="1"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 8.5H1.8V22H5V8.5ZM3.4 2A1.9 1.9 0 1 0 3.4 5.8 1.9 1.9 0 0 0 3.4 2ZM22.2 13.7c0-4-2.1-5.6-4.9-5.6-2.3 0-3.4 1.3-3.9 2.2V8.5h-3.3V22h3.3v-6.7c0-1.8.3-3.5 2.5-3.5s2.2 2 2.2 3.6V22h3.3Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3.1 1.1a10.8 10.8 0 0 1 5.6 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      {/* Partie orange : personnages et réseaux sociaux */}
      <div className="footer-top">
        <nav
          className="footer-socials"
          aria-label="Réseaux sociaux"
        >
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <SocialIcon type={social.id} />
            </a>
          ))}
        </nav>

        <div className="footer-figures" aria-hidden="true">
          {footerItems.map((item) => (
            <div
              className={`footer-figure footer-figure--${item.id}`}
              key={item.id}
            >
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Partie sombre : navigation et signature */}
      <div className="footer-bottom">
        <nav
          className="footer-navigation"
          aria-label="Navigation de fin de page"
        >
          {footerItems.map((item) => (
            <a
              className={`footer-navigation-link footer-navigation-link--${item.id}`}
              href={item.href}
              key={item.id}
              aria-label={`${item.firstLine} ${item.secondLine}`}
            >
              <span>{item.firstLine}</span>
              <span>{item.secondLine}</span>
            </a>
          ))}
        </nav>

        <p className="footer-side-note footer-side-note--left">
          All my
          <br />
          sincere
        </p>

        <p className="footer-thanks">THANKS</p>

        <p className="footer-side-note footer-side-note--right">
          for your
          <br />
          precious time
        </p>
      </div>
    </footer>
  );
}

export default Footer;
