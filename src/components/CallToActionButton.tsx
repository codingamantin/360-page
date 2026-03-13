import type { CallToAction as CallToActionBlok } from '../../.storyblok/types/290932035929349/storyblok-components'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import { Link } from '@tanstack/react-router'

type CallToActionProps = {
  blok: CallToActionBlok & {
    mobile?: boolean
    closeMenu?: () => void
  }
  onNavigate?: () => void
}

export default function CallToAction({ blok, onNavigate }: CallToActionProps) {
  const isMobile = blok.mobile

  return (
    <Link
      {...storyblokEditable(blok as SbBlokData)}
      className={
        isMobile
          ? 'block w-full text-center font-bold text-sm tracking-widest uppercase px-6 py-3 border border-taupe/40 text-foreground hover:bg-taupe/10 transition-colors duration-300'
          : 'hidden md:inline-block font-bold text-sm tracking-widest uppercase px-6 py-3 border border-taupe/40 text-foreground hover:bg-taupe/10 transition-colors duration-300'
      }
      to={blok.href ?? '#'}
      onClick={() => {
        blok.closeMenu?.()
        onNavigate?.()
      }}
    >
      {blok.title ?? 'Untitled'}
    </Link>
  )
}