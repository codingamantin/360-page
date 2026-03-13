import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import type { Header as HeaderBlok } from '../../.storyblok/types/290932035929349/storyblok-components'
import type { SbBlokData } from '@storyblok/react'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function Header({ blok }: { blok: HeaderBlok }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = blok.items ?? []
  const callToAction = blok.callToAction ?? []

  return (
    <header
      {...storyblokEditable(blok as SbBlokData)}
      className="fixed top-0 left-0 right-0 z-50 bg-leather/90 backdrop-blur-md border-b border-taupe/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="shrink-0">
          <img className="h-6 w-auto select-none md:h-8" src={blok.logo} />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </nav>

        {callToAction.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-leather border-t border-taupe/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((nestedBlok) => (
                <StoryblokComponent
                  blok={{ ...nestedBlok, closeMenu: () => setIsOpen(false) }}
                  key={nestedBlok._uid}
                />
              ))}
              {callToAction.map((nestedBlok) => (
                <StoryblokComponent
                  blok={{
                    ...nestedBlok,
                    mobile: true,
                    closeMenu: () => setIsOpen(false),
                  }}
                  key={nestedBlok._uid}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
