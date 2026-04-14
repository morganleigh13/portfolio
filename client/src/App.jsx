import Lotus from "./components/canvas/Lotus"
import Navbar from "./components/Navbar"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <div>
      <Navbar />
      <Lotus/>
      <Projects />
    </div>
  )
}

export default App