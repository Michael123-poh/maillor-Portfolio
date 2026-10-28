
import "./Contacts.css";

const contactDetails = [
  {
    id: "email",
    label: "EMAIL",
    value: "yvesmaillore@gmail.com",
    href: "mailto:yvesmaillore@gmail.com",
  },
  {
    id: "phone",
    label: "TÉLÉPHONE",
    value: "659 063 879",
    href: "tel:+237659063879",
  },
  {
    id: "location",
    label: "Localisation",
    value: "Douala, Cameroun",
  },
];

function ContactIcon({ type }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="contact-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "email" && (
        <>
          <rect x="5" y="11" width="38" height="27" rx="2" />
          <path d="M6 13 24 28 42 13" />
        </>
      )}

      {type === "phone" && (
        <>
          <rect x="13" y="4" width="22" height="40" rx="3" />
          <path d="M20 8h8M22 39h4" />
        </>
      )}

      {type === "location" && (
        <>
          <circle cx="24" cy="24" r="19" />
          <ellipse cx="24" cy="24" rx="9" ry="19" />
          <path d="M5 24h38M9 14h30M9 34h30" />
        </>
      )}
    </svg>
  );
}

function ContactInfo({ item }) {
  return (
    <div className="contact-info-item">
      <div className="contact-info-icon">
        <ContactIcon type={item.id} />
      </div>

      <div className="contact-info-copy">
        <h3>{item.label}</h3>

        {item.href ? (
          <a href={item.href}>{item.value}</a>
        ) : (
          <p>{item.value}</p>
        )}
      </div>
    </div>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const project = formData.get("project");

    const subject = encodeURIComponent(
      `Demande de projet - ${projectType}`
    );

    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\nType de projet : ${projectType}\n\nMon projet :\n${project}`
    );

    window.location.href =
      `mailto:yvesmaillore@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <header className="contact-header">
        <h2 className="contact-heading">
          <span>UN PROJET ?</span>
          <span>
            LET’S <span className="contact-accent">TALK...</span>
          </span>
        </h2>

        <p className="contact-number">01</p>
      </header>

      <div className="contact-info-grid">
        {contactDetails.map((item) => (
          <ContactInfo key={item.id} item={item} />
        ))}
      </div>

      <div className="contact-body">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label className="contact-field">
              <span>VOTRE NOM</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
              />
            </label>

            <label className="contact-field">
              <span>VOTRE EMAIL</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="contact-field">
            <span>TYPE DE PROJET</span>

            <select name="projectType" defaultValue="" required>
              <option value="" disabled>
              </option>
              <option value="Site web">Site web</option>
              <option value="Application web">Application web</option>
              <option value="Application mobile">Application mobile</option>
              <option value="UI/UX design">UI/UX design</option>
              <option value="Autre">Autre</option>
            </select>
          </label>

          <label className="contact-field contact-field--message">
            <span>VOTRE PROJET</span>

            <textarea
              name="project"
              rows="2"
              required
            />
          </label>

          <button className="contact-submit" type="submit">
            <span className="contact-submit-icon">
              <span />
            </span>
            <span>ENVOYER</span>
          </button>
        </form>

        <aside className="contact-aside">
          <img
            className="contact-illustration"
            src="/images/reunion.png"
            alt="Deux personnes réunies autour d'un ordinateur"
          />

          <div className="contact-manifesto">
            <p>
              TOUS LES GRANDS PROJETS
              <br />
              COMMENCENT QUELQUE PART
            </p>

            <h3>LE VÔTRE AUSSI</h3>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
