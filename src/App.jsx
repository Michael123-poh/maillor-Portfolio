import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./App.css";

// Liens internes (#projets, #contact, ...) : défilement fluide vers la section,
// sans ajouter de # dans l'adresse du navigateur.
function useCleanAnchorScroll() {
  useEffect(() => {
    function handleClick(event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href").slice(1);
      const isTop = id === "" || id === "top";
      const target = isTop ? null : document.getElementById(id);

      // lien vers une section qui n'existe pas : on laisse faire le navigateur
      if (!isTop && !target) return;

      event.preventDefault();

      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "auto"
        : "smooth";

      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

function App() {
  useCleanAnchorScroll();

  return (
    <main className="portfolio-page">
      <div className="hero-stage">
        <Hero />
        <Navbar />
      </div>

      <About />
      <Projects />
      <Services />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;