import { motion } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { FinalCtaSection as FinalCtaSectionBlok } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function FinalCtaSection({
  blok,
}: {
  blok: FinalCtaSectionBlok
}) {
  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="final-cta"
      className="bg-cacao py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
            {blok.headingLine1 ?? 'Ready to transform'}
            <br />
            <span className="italic text-khaki">
              {blok.headingEmphasis ?? 'your space?'}
            </span>
          </h2>
          <p className="font-body text-base text-taupe font-light max-w-lg mx-auto  mb-10">
            {blok.description ??
              "Every great space starts with a conversation. Let's discuss your vision and begin the journey toward your ideal interior."}
          </p>
          <a
            href={blok.buttonHref ?? '#contact'}
            className="inline-block font-body text-sm tracking-widest uppercase px-10 py-4 bg-taupe text-leather hover:bg-khaki transition-colors duration-300"
          >
            {blok.buttonLabel ?? 'Start Your Project'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
