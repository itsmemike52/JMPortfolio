import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-ghibli-cream dark:bg-gray-950 transition-colors duration-300">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Hero isDark={isDark} />
        <Projects isDark={isDark} />
        <About isDark={isDark} />
        <Contact isDark={isDark} />
      </div>
    </div>
  )
}
