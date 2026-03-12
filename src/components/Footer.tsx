import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { Footer as FooterBlok } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function Footer({ blok }: { blok: FooterBlok }) {
  return (
    <footer
      {...storyblokEditable(blok as SbBlokData)}
      className="mt-16 border-t border-[color:var(--line)] bg-[color:var(--header-bg)]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-[color:var(--sea-ink-soft)]">
        {/* Optional footer blocks if you add them later */}
        {blok.footerItem?.length ? (
          <div className="grid gap-4">
            {blok.footerItem.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        ) : (
          <p>© {new Date().getFullYear()} Your Company</p>
        )}
      </div>
    </footer>
  )
}
