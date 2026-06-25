import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-page text-summary min-h-screen">
      <Navbar />
      <main>
        <section id="about">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App
