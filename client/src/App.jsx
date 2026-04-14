import Lotus from "./components/canvas/Lotus"
import Navbar from "./components/Navbar"
import Projects from "./sections/Projects"
import ContactMe from "./sections/ContactMe"

const App = () => {
  return (
    <div>
      <Navbar />
      <Lotus/>
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App