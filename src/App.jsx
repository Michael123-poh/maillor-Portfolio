import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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