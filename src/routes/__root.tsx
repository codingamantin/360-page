import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import appCss from '../styles.css?url'
import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react'
import Page from '../components/Page'
import Teaser from '../components/Teaser'
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Header from '#/components/Header'
import Footer from '#/components/Footer'
import NavItem from '#/components/NavItem'
import CallToAction from '#/components/CallToActionButton'
import HeroSection from '#/components/HeroSection'
import ServicesSection from '#/components/ServicesSection'
import ServiceItem from '#/components/ServiceItem'
import ProjectCard from '#/components/ProjectCard'
import ProjectsSection from '#/components/ProjectsSection'
import AboutSection from '#/components/AboutSection'
import ProcessSection from '#/components/ProcessSection'

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,
    header: Header,
    footer: Footer,
    'nav-item': NavItem,
    callToAction: CallToAction,
    heroSection: HeroSection,
    services: ServicesSection,
    serviceItem: ServiceItem,
    projectCard: ProjectCard,
    projectsSection: ProjectsSection,
    aboutSection: AboutSection,
    processSection: ProcessSection,
  },
  apiOptions: {
    region: 'eu',
  },
})

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  loader: async () => {
    const api = getStoryblokApi()
    const { data } = await api.get('cdn/stories/globals', {
      version: 'draft', // use 'published' in prod
    })
    return data.story
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const globalsStory = Route.useLoaderData()

  // Your fields are arrays (max 1), so take the first
  const headerBlok = globalsStory?.content?.header?.[0]
  const footerBlok = globalsStory?.content?.footer?.[0]
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className=" ">
        {headerBlok ? <StoryblokComponent blok={headerBlok} /> : null}

        {/* Page content */}
        {children}

        {/* Footer */}
        {footerBlok ? <StoryblokComponent blok={footerBlok} /> : null}

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
