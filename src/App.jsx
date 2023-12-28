import { Intro } from "./components/Intro"
import { Navbar } from "./components/Navbar"
import { ProjectCard } from "./components/ProjectCard"
import { Skills } from "./components/Skills"

function App() {

  return (
    <>
      <div className="bg-black h-[100%] w-full">
        <Navbar />
        <Intro />
        <Skills />
        <ProjectCard/>
      </div>
    </>
  )
}

export default App
