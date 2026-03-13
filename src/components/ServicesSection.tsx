import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import { motion } from 'framer-motion'
import type { Services } from '../../.storyblok/types/290932035929349/storyblok-components'
import { StoryblokServerComponent } from '@storyblok/react/rsc'

export default function ServicesSection({ blok }: { blok: Services }) {
  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="services"
      className="bg-cacao py-24 md:py-32"
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
            {blok.heading}
          </p>
          <h2 className="font-display  text-3xl md:text-5xl font-light text-foreground">
            {blok.subheading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-taupe/20">
          {blok.service?.map((service, i) => (
            <motion.div
              key={service._uid}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cacao p-10 group hover:bg-leather transition-colors duration-500"
            >
              <StoryblokServerComponent blok={service} key={service._uid} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
