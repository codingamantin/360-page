import { motion } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { ProcessSection } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function ProcessSection({ blok }: { blok: ProcessSection }) {
  const steps = blok.steps ?? []

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="process"
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
            {blok.heading ?? 'How We Work'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {blok.subheading ?? 'Design Process'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step._uid}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-display text-6xl text-taupe/20 absolute -top-4 -left-2">
                {step.num}
              </span>
              <div className="pt-10 pl-2">
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-taupe font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
