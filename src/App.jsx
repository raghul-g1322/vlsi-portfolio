import Stats from "./components/Stats";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
       <ScrollProgress />
       
      <Navbar />

      <CursorGlow />
      
      <Hero />

      <About />

      <Stats />

      <Experience />

      <Projects />

      <Skills />

      <Certifications />

      <Education />

      <Contact />

      <Footer />
    </>
  );
}

export default App;