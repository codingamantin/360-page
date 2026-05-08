import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { motion } from 'framer-motion'

import type { ProjectCard } from '../../.storyblok/types/290932035929349/storyblok-components'

export const Route = createFileRoute('/projects/$slug')({
  loader: async ({ params }) => {
    const api = getStoryblokApi()
    const { data } = await api.get('cdn/stories/home', {
      version: 'draft',
    })

    const projectSection = data.story.content?.body?.find(
      (blok: { component?: string }) => blok.component === 'projectsSection',
    ) as { projects?: ProjectCard[] } | undefined

    const project = projectSection?.projects?.find(
      (entry) => entry.slug === params.slug,
    )

    if (!project) {
      throw notFound()
    }

    return project
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData.title ?? 'Project'} | Studio 360`,
      },
      {
        name: 'description',
        content:
          loaderData.desc ??
          'Explore a Studio 360 interior project shaped by calm materials, clear composition, and modern living.',
      },
    ],
  }),
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const project = Route.useLoaderData()
  const heroImage = project.img?.filename ?? project.img?.src ?? null
  const gallery = project.gallery?.length ? project.gallery : project.img ? [project.img] : []
  const paragraphs = splitParagraphs(project.longDescription ?? project.desc)

  return (
    <main className="bg-leather">
      <section className="relative min-h-[85vh] overflow-hidden bg-leather">
        {heroImage ? (
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={project.img?.alt ?? project.title ?? ''}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-leather via-leather/78 to-leather/20" />
          </div>
        ) : null}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-40 lg:py-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="inline-block font-body text-xs tracking-[0.25em] uppercase text-taupe hover:text-foreground transition-colors duration-300 mb-8"
            >
              Back to Home
            </Link>

            {project.category ? (
              <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-6">
                {project.category}
              </p>
            ) : null}

            {project.title ? (
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8">
                {project.title}
              </h1>
            ) : null}

            {project.desc ? (
              <p className="font-body text-base md:text-lg text-taupe max-w-xl font-light leading-relaxed">
                {project.desc}
              </p>
            ) : null}
          </motion.div>
        </div>
      </section>

      <section className="bg-pearl py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
              Project Overview
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cacao">
              Designed with
              <br />
              <span className="italic">intention</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-body text-base text-cacao/80 font-light leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-khaki pt-10">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mb-2">
                  Project Type
                </p>
                <p className="font-display text-2xl text-cacao">
                  {project.category ?? 'Interior'}
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mb-2">
                  Signature Detail
                </p>
                <p className="font-display text-2xl text-cacao">
                  Material-Led
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {gallery.length ? (
        <section className="bg-leather py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
                Gallery
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
                Project Details
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((image, index) => {
                const imageSrc = image.filename ?? image.src

                if (!imageSrc) {
                  return null
                }

                return (
                  <motion.div
                    key={image.id ?? `${imageSrc}-${index}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={index === 0 ? 'md:col-span-2' : ''}
                  >
                    <div className="overflow-hidden bg-cacao/60 aspect-[4/5] md:aspect-[4/3]">
                      <img
                        src={imageSrc}
                        alt={image.alt ?? project.title ?? ''}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-cacao py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
              Ready to shape
              <br />
              <span className="italic text-khaki">your own space?</span>
            </h2>
            <p className="font-body text-base text-taupe font-light max-w-lg mx-auto mb-10">
              Tell us what you are building, renovating, or reimagining, and we will start the conversation from there.
            </p>
            <StoryblokComponent
              blok={{
                _uid: 'project-detail-contact-cta',
                component: 'callToAction',
                href: '/#contact',
                title: 'Book a Consultation',
                variant: 'secondary',
              }}
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function splitParagraphs(copy?: string) {
  return (copy ?? '')
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}
