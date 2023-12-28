import { Intro } from "./components/Intro"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <div className="bg-black h-screen w-full">
        <Navbar />
        <Intro />
      </div>
    </>
  )
}

export default App
