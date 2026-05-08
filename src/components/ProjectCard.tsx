import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import { Link } from '@tanstack/react-router'
import type { ProjectCard } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function ProjectCard({ blok }: { blok: ProjectCard }) {
  const imgSrc = blok.img?.filename ?? blok.img?.src ?? null
  const imgAlt = blok.img?.alt ?? blok.title ?? ''
  const projectHref = blok.slug ? `/projects/${blok.slug}` : null
  const content = (
    <>
      <div className="overflow-hidden mb-5 aspect-4/5 bg-cacao/60">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-cacao/70 via-leather/30 to-cacao/60" />
        )}
      </div>

      {blok.category ? (
        <p className="font-body text-xs tracking-[0.2em] uppercase text-taupe mb-2">
          {blok.category}
        </p>
      ) : null}

      {blok.title ? (
        <h3 className="font-display text-xl text-foreground mb-2">
          {blok.title}
        </h3>
      ) : null}

      {blok.desc ? (
        <p className="font-body text-sm text-taupe font-light">{blok.desc}</p>
      ) : null}
    </>
  )

  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      {projectHref ? (
        <Link to={projectHref} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  )
}
