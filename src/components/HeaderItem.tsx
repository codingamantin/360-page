import type { HeaderItem as HeaderItemBlok } from '../../.storyblok/types/290932035929349/storyblok-components'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'


export default function HeaderItem({ blok }: { blok: HeaderItemBlok }) {
  // Your generated type doesn't include href, so read it safely:
  

  return (
    <a
      {...storyblokEditable(blok as SbBlokData)}
      className="text-sm font-medium  transition"
      href='#about'
    >
      {blok.title ?? 'Untitled'}
    </a>
  )
}