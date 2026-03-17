import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { InstagramSection } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function InstagramSection({ blok }: { blok: InstagramSection }) {
  const images = blok.images ?? []

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="instagram"
      className="bg-pearl py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Instagram
            className="w-6 h-6 text-taupe mx-auto mb-4"
            strokeWidth={1.5}
          />
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
            {blok.handle ?? '@studio360'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cacao">
            {blok.heading ?? 'Follow Our Work'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((image, i) => {
            const imageSrc = image.filename ?? image.src
            if (!imageSrc) {
              return null
            }

            return (
              <motion.div
                key={image.id ?? imageSrc}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={imageSrc}
                  alt={
                    image.alt ||
                    `Studio 360 interior design inspiration ${i + 1}`
                  }
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
