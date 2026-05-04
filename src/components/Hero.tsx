interface HeroProps {
  isDark: boolean
}

export default function Hero({ isDark: _isDark }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ghibli-coral/10 dark:bg-ghibli-coral/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-ghibli-softblue/10 dark:bg-ghibli-softblue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-ghibli-sage/5 dark:bg-ghibli-sage/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to my
            <br />
            <span className="ghibli-text-gradient">Creative World</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mb-8">
            Where design meets imagination,
            <br />
            inspired by the beauty of Studio Ghibli
          </p>
        </div>

        <div className="glass dark:glass-dark p-8 md:p-12 max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I craft beautiful, meaningful digital experiences with a touch of artistic inspiration. 
            Explore my work and discover the stories behind each project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-ghibli-coral/90 hover:bg-ghibli-coral text-white rounded-full transition-all hover:shadow-lg hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 glass dark:glass-dark text-ghibli-coral dark:text-ghibli-coral hover:scale-105 transition-all">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-ghibli-coral dark:text-ghibli-softblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
