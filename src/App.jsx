import { ThemeProvider } from './hooks/useTheme.jsx'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-t-bg text-t-text transition-colors duration-300">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
