import { useState } from 'react'
import type { MouseEvent, TouchEvent } from 'react'
import { motion } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { BeforeAfterSection } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function BeforeAfterSection({
  blok,
}: {
  blok: BeforeAfterSection
}) {
  const [sliderPos, setSliderPos] = useState(50)

  const beforeSrc = blok.beforeImage?.filename ?? blok.beforeImage?.src ?? null
  const afterSrc = blok.afterImage?.filename ?? blok.afterImage?.src ?? null

  const handleMove = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()

    let clientX = 0
    if ('touches' in e) {
      const touch = e.touches[0]
      if (!touch) {
        return
      }
      clientX = touch.clientX
    } else {
      clientX = e.clientX
    }

    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(0, Math.min(100, x)))
  }

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="before-after"
      className="bg-leather py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
            {blok.eyebrow ?? 'Transformations'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {blok.subheading ?? 'Before & After'}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto aspect-4/3 overflow-hidden cursor-col-resize select-none bg-cacao/50"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {afterSrc ? (
            <img
              src={afterSrc}
              alt={blok.afterAlt ?? 'Kitchen after renovation'}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-khaki/20 via-taupe/20 to-cacao/40" />
          )}

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            {beforeSrc ? (
              <img
                src={beforeSrc}
                alt={blok.beforeAlt ?? 'Kitchen before renovation'}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-leather/60 via-cacao/50 to-cacao/80" />
            )}
          </div>

          <div
            className="absolute top-0 bottom-0 w-px bg-foreground/60"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-foreground/60 bg-leather/80 flex items-center justify-center">
              <span className="font-body text-xs text-foreground">↔</span>
            </div>
          </div>

          <div className="absolute top-4 left-4 font-body text-xs tracking-widest uppercase text-foreground bg-leather/60 px-3 py-1">
            {blok.beforeLabel ?? 'Before'}
          </div>
          <div className="absolute top-4 right-4 font-body text-xs tracking-widest uppercase text-foreground bg-leather/60 px-3 py-1">
            {blok.afterLabel ?? 'After'}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
