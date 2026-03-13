import type { CallToAction as CallToActionBlok } from '../../.storyblok/types/290932035929349/storyblok-components'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import { Link } from '@tanstack/react-router'

type CallToActionProps = {
  blok: CallToActionBlok & {
    mobile?: boolean
    variant?: 'primary' | 'secondary'
    closeMenu?: () => void
  }
  onNavigate?: () => void
}

export default function CallToAction({ blok, onNavigate }: CallToActionProps) {
  const isMobile = blok.mobile
  const variant = blok.variant ?? 'primary'

  const baseClasses =
    'font-body text-sm tracking-widest text-center uppercase transition-colors duration-300'

  const primaryClasses =
    'font-body px-8 py-4 border  border-taupe/40 text-foreground hover:bg-taupe/10'


  const secondaryClasses =
    'font-body px-8 py-4 bg-taupe text-leather hover:bg-khaki '

  const visibility = isMobile
    ? 'block w-full'
    : 'hidden md:inline-block'

  const variantClasses =
    variant === 'secondary' ? secondaryClasses : primaryClasses

  return (
    <Link
      {...storyblokEditable(blok as SbBlokData)}
      className={`${visibility} ${baseClasses} ${variantClasses}`}
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