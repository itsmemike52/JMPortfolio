import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from 'lucide-react'
//import jmImage from '../assets/jm.jpg'
//import firstImage from '../assets/first.png'
import insertImage from '../assets/insert.jpg'
import insert2Image from '../assets/insert2.jpg'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  github: string
  image?: string
  images?: string[]
  imagePosition?: string
}

interface ProjectCardProps {
  project: Project
  onView: (project: Project) => void
  isDark: boolean
  delay: number
}

function ProjectCard({ project, onView, isDark: _isDark, delay }: ProjectCardProps) {
  return (
    <div
      className="floating-card glass dark:glass-dark p-6 hover:shadow-2xl transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-40 overflow-hidden bg-gradient-to-br from-ghibli-coral/20 to-ghibli-softblue/20 dark:from-ghibli-coral/10 dark:to-ghibli-softblue/10 rounded-xl mb-4 animate-shimmer">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            style={{ objectPosition: project.imagePosition ?? 'center' }}
          />
        )}
      </div>

      <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
        {project.title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-ghibli-coral/20 dark:bg-ghibli-coral/10 text-ghibli-coral dark:text-ghibli-coral rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onView(project)}
          className="flex items-center gap-2 px-4 py-2 bg-ghibli-coral/80 hover:bg-ghibli-coral text-white rounded-lg transition-all hover:shadow-lg"
        >
          <ExternalLink className="w-4 h-4" />
          View
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 glass dark:glass-dark text-gray-900 dark:text-white hover:scale-105 transition-all"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </div>
  )
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const projectImages = project.images ?? (project.image ? [project.image, project.image] : [])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeImage = projectImages[activeImageIndex]

  function showNextImage() {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % projectImages.length)
  }

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) => (
      currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1
    ))
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto glass dark:glass-dark bg-white/95 p-5 shadow-2xl dark:bg-gray-900/95 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-1 rounded-full bg-black/10 p-0.5 text-xs text-gray-900 transition hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-ghibli-coral/20 to-ghibli-softblue/20">
          {activeImage ? (
            <img
              src={activeImage}
              alt={project.title}
              className="h-64 w-full object-cover md:h-[28rem]"
              style={{ objectPosition: project.imagePosition ?? 'center' }}
            />
          ) : (
            <div className="h-64 w-full md:h-[28rem]" />
          )}

          {projectImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65"
                aria-label="Show previous project image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65"
                aria-label="Show next project image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}
        </div>

        <h3
          id="project-modal-title"
          className="mb-4 pr-12 text-3xl font-bold font-serif text-gray-900 dark:text-white md:text-5xl"
        >
          {project.title}
        </h3>

        <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ghibli-coral/20 px-3 py-1 text-sm text-ghibli-coral dark:bg-ghibli-coral/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-ghibli-coral/90 px-5 py-3 text-white transition hover:bg-ghibli-coral hover:shadow-lg"
          >
            <ExternalLink className="h-4 w-4" />
            Open Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg glass dark:glass-dark px-5 py-3 text-gray-900 transition hover:scale-105 dark:text-white"
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}

interface ProjectsProps {
  isDark: boolean
}

export default function Projects({ isDark }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects = [
    {
      title: "Ethereal Gallery",
      description: "An interactive art gallery showcasing digital paintings with smooth animations and immersive design.",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "#",
      github: "#",
      image: insert2Image,
      images: [insertImage, insert2Image],
      imagePosition: "center 25%",
    },
    {
      title: "Forest Journey",
      description: "A nature-inspired web app that guides users through interactive storytelling with beautiful transitions.",
      tags: ["Next.js", "Three.js", "Spline"],
      link: "#",
      github: "#",
      image: insertImage,
      images: [insertImage, insert2Image],
      imagePosition: "center 25%",
    },
    {
      title: "Melody Studio",
      description: "A modern music production interface with a calm color palette and intuitive user experience.",
      tags: ["Vue.js", "Web Audio API", "TailwindCSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Zen Dashboard",
      description: "A minimalist analytics dashboard with soft colors and peaceful data visualization.",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
      github: "#",
    },
    {
      title: "Twilight Commerce",
      description: "An e-commerce platform with enchanting design and smooth shopping experience.",
      tags: ["React", "Stripe", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "Dream Notes",
      description: "A poetic note-taking app with beautiful typography and peaceful interface design.",
      tags: ["React", "IndexedDB", "Framer"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="ghibli-text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-ghibli-coral to-ghibli-softblue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onView={setSelectedProject}
              isDark={isDark}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 text-lg font-serif font-bold text-white bg-ghibli-coral/90 hover:bg-ghibli-coral rounded-full transition-all hover:shadow-lg hover:scale-105">
            Explore All Projects
          </button>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
