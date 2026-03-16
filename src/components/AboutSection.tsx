import { motion } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { AboutSection } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function AboutSection({ blok }: { blok: AboutSection }) {
  const imageSrc = blok.image?.filename ?? blok.image?.src ?? null
  const stats = blok.stats ?? []

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="about"
      className="bg-pearl py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden bg-khaki/30 min-h-88">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={blok.image?.alt ?? 'Studio 360 design team at work'}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
              {blok.eyebrow ?? 'About Us'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cacao mb-8">
              {blok.headingLine1 ?? 'Design with'}
              <br />
              <span className="italic">
                {blok.headingEmphasis ?? 'intention'}
              </span>
            </h2>
            <div className="space-y-5 font-body text-base text-cacao/80 font-light leading-relaxed">
              {blok.paragraph1 ? <p>{blok.paragraph1}</p> : null}
              {blok.paragraph2 ? <p>{blok.paragraph2}</p> : null}
              {blok.paragraph3 ? <p>{blok.paragraph3}</p> : null}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-khaki pt-10">
              {stats.map((stat) => (
                <div key={stat._uid}>
                  <p className="font-display text-3xl text-cacao">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs tracking-widest uppercase text-taupe mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
