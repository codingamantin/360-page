import { createFileRoute } from '@tanstack/react-router'
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react'

export const Route = createFileRoute('/')({
  loader: async () => {
    const api = getStoryblokApi()
    const { data } = await api.get('cdn/stories/home', {
      version: 'draft',
    })
    return data.story
  },
  component: App,
})

function App() {
  const story = Route.useLoaderData()
  return <StoryblokComponent blok={story.content} />
}
