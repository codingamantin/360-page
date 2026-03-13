import type { NavItem as NavItemBlok } from '../../.storyblok/types/290932035929349/storyblok-components'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import { Link } from '@tanstack/react-router'

type NavItemProps = {
  blok: NavItemBlok
  onNavigate?: () => void
}

export default function NavItem({ blok, onNavigate }: NavItemProps) {
  return (
    <Link
      {...storyblokEditable(blok as SbBlokData)}
      className="font-bold text-sm tracking-widest uppercase text-taupe hover:text-foreground transition-colors duration-300"
      to={blok.href ?? '#'}
      onClick={onNavigate}
    >
      {blok.title ?? 'Untitled'}
    </Link>
  )
}