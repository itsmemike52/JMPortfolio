import { Moon, Sun } from 'lucide-react'

interface HeaderProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-ghibli-cream/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-ghibli-sage/20 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-serif font-bold ghibli-text-gradient">
            Portfolio
          </h1>
          <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
            <a href="#projects" className="hover:text-ghibli-coral transition">Projects</a>
            <a href="#about" className="hover:text-ghibli-coral transition">About</a>
            <a href="#contact" className="hover:text-ghibli-coral transition">Contact</a>
          </div>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="glass dark:glass-dark p-2 rounded-full hover:scale-110 transition-transform"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-600" />
          )}
        </button>
      </nav>
    </header>
  )
}
