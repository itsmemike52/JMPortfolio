import { Sparkles } from 'lucide-react'
import jmImage from '../assets/jm.jpg'

const aboutImage = {
  image: jmImage,
  imagePosition: 'center 10%',
}

interface AboutProps {
  isDark: boolean
}

export default function About({ isDark: _isDark }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-center text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass dark:glass-dark p-8">
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <img
                src={aboutImage.image}
                alt="About me"
                className="w-full h-full object-cover"
                style={{ objectPosition: 
                aboutImage.imagePosition }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-ghibli-coral/30 to-ghibli-softblue/30 dark:from-ghibli-coral/20 dark:to-ghibli-softblue/20"></div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate designer and developer who believes in creating digital experiences
              that inspire and delight. Influenced by the aesthetics of Studio Ghibli, I blend
              creativity with functionality to craft meaningful projects.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              With a focus on beautiful UI design, smooth animations, and user-centric experiences,
              I transform ideas into interactive art.
            </p>

            <div className="space-y-3 mb-8">
              {['Design', 'Development', 'Animation', 'UX/UI'].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-ghibli-coral" />
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-ghibli-coral/90 hover:bg-ghibli-coral text-white rounded-full transition-all hover:shadow-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
