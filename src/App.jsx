import { ContactMe } from "./components/ContactMe"
import { Experience } from "./components/Experience"
import { Intro } from "./components/Intro"
import { Navbar } from "./components/Navbar"
import { ProjectCard } from "./components/ProjectCard"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {

  return (
    <>
      <div className="bg-black h-[100%] w-full">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <ContactMe />
      </div>
    </>
  )
}

export default App
