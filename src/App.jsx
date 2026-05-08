import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  );
}