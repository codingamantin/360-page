import { motion } from 'framer-motion'
import type { HeroSection } from '../../.storyblok/types/290932035929349/storyblok-components'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'

export default function HeroSection({ blok }: { blok: HeroSection }) {
  const callToAction = blok.callToAction ?? []
  const viewProjectAction=blok.viewProjectAction ?? []
  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative min-h-screen flex items-center bg-leather overflow-hidden"
    >
      {blok.image?.filename && (
        <div className="absolute inset-0">
          <img
            src={blok.image.filename}
            alt="Luxurious modern interior living room with natural materials"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-r from-leather via-leather/80 to-transparent" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-6">
            {blok.bussinesTypeTitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8">
            {blok.headingFirstLine}
            <br />
            <span className="italic text-khaki">{blok.keyword}</span>
            <br /> {blok.headingSecondLine}
          </h1>
          <p className="font-body text-base md:text-lg text-taupe max-w-md mb-12 font-light leading-relaxed">
            {blok.subHeading}{' '}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {callToAction.map((nestedBlok) => (
              <StoryblokComponent
                blok={{
                  ...nestedBlok,
                  variant: 'secondary',
                }}
                key={nestedBlok._uid}
              />
            ))}
            {viewProjectAction.map((nestedBlok) => (
              <StoryblokComponent
                blok={{
                  ...nestedBlok,
                  variant: 'primary',
                }}
                key={nestedBlok._uid}
                style={{ fontFamily: 'var(--font-body)' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
