import Header from './Header.jsx'
import Footer from './Footer.jsx' // Always import every component
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Experience from './Experience.jsx'
import react, {useState, useEffect} from "react"
import { ImSun } from "react-icons/im";
import { RxMoon } from "react-icons/rx";





function App() {  
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark")

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

    return (
      <>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className='theme-toggle'>
        <button  aria-label="Change to light theme" className='button-theme' onClick={toggleTheme}>{isDarkMode ? <ImSun size={15} className='icon' />:  <RxMoon size={15} className='icon'/>}</button>
        </div>
        <Header /> {/* Header is a component that render what is inside of Header.jsx */}
        <Skills className='skills-section'/> {/* This is a comment only you need this syntax */}
        <Experience />
        <Projects /> {/*number, desc and tech are props*/}
        <Footer />
        </div>
      </>
  );
}

// Always put <,>, </> at the top and bottom of every function App for rendering many components
export default App
