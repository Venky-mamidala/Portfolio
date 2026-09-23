import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import WhatsApp from "./Components/WhatsApp";
import ScrollUrlSync from "./Components/ScrollUrlSync";

function App() {
  return (
    <>
      <Navbar />
      <ScrollUrlSync />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;
