import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import type { Header as HeaderBlok } from '../../.storyblok/types/290932035929349/storyblok-components'
import type { SbBlokData } from '@storyblok/react'

export default function Header({ blok }: { blok: HeaderBlok }) {
  return (
    <header
      {...storyblokEditable(blok as SbBlokData)}
      className="sticky top-0 z-30 border-b border-[color:var(--line)] bg-[color:var(--header-bg)] backdrop-blur"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
     <img src={blok.logo} alt="" />
        <nav className="flex items-center gap-6">
          {blok.items?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </nav>
      </div>
    </header>
  )
}
