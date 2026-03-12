import { StoryblokComponent } from '@storyblok/react';
import type { Page } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function Page({ blok }: { blok: Page }) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}