import { Mail, Linkedin, Github, Twitter, Facebook } from 'lucide-react'

interface ContactProps {
  isDark: boolean
}

export default function Contact({ isDark: _isDark }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
          Let's Create Something
          <br />
          <span className="ghibli-text-gradient">Magical Together</span>
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="glass dark:glass-dark p-10 mb-12">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 text-sm md:text-lg font-serif text-ghibli-coral hover:text-ghibli-coral/80 transition mb-8"
          >
            <Mail className="w-8 h-8" />
            johnmichaelconarco4@gmail.com
          </a>

          <div className="flex justify-center gap-6 mt-8">
            {[
              { icon: Linkedin, label: 'LinkedIn', link: '#' },
              { icon: Github, label: 'GitHub', link: '#' },
              { icon: Twitter, label: 'Twitter', link: '#' },
              { icon: Facebook, label: 'Facebook', link: 'https://www.facebook.com/johnmichael.conarco' },
            ].map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-ghibli-coral/20 dark:bg-ghibli-coral/10 text-ghibli-coral hover:bg-ghibli-coral hover:text-white transition-all hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400">
          © 2024 My Portfolio. Crafted with artistic inspiration.
        </p>
      </div>
    </section>
  )
}
