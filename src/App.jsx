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
      </div>
    </>
  )
}

export default App
