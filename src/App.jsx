import { Intro } from "./components/Intro"
import { Navbar } from "./components/Navbar"
import { Skills } from "./components/Skills"

function App() {

  return (
    <>
      <div className="bg-black h-[100%] w-full">
        <Navbar />
        <Intro />
        <Skills />
      </div>
    </>
  )
}

export default App
