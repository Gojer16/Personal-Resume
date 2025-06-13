import Header from './components/Header.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'

function App() {  


    return (
      <>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-[gradient-x_8s_ease_infinite]">
          <section id='Home' className='snap-start min-h-screen'>
            <Header />
          </section>
          <section id='Skills' className='snap-start min-h-screen'>
            <Skills />
          </section>
          <section id='Experience' className='snap-start min-h-screen'>
            <Experience />
          </section>
          <section id='Projects' className='snap-start min-h-screen'>
            <Projects /> 
          </section>
        </div>
      </main>
      </>
  );
}

export default App
