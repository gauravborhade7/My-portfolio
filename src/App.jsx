import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { Skills } from "./components/skills/Skill.jsx";
import {Projects} from './components/Projects/Projects.jsx'


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;