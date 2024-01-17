import { useState } from 'react'
import Navbar from "./components/NavBar/navbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Skills from "./components/Skills/skills.jsx";
import Work from "./components/Work/work.jsx";
import Experience from "./components/experience/experience.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
