import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import { motion } from 'framer-motion'
import type { ProjectsSection } from '../../.storyblok/types/290932035929349/storyblok-components'
import ProjectCard from '#/components/ProjectCard'

export default function ProjectsSection({ blok }: { blok: ProjectsSection }) {
  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="projects"
      className="bg-leather py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
            {blok.heading ?? 'Portfolio'}
          </p>
          <h2 className="font-display  text-4xl md:text-5xl font-light text-foreground">
            {blok.subheading ?? 'Featured Projects'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blok.projects?.map((project, i) => (
            <motion.div
              key={project._uid}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <ProjectCard blok={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
