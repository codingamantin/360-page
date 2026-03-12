import { StoryblokComponent } from '@storyblok/react';
import type { Grid } from '../../.storyblok/types/290932035929349/storyblok-components';

export default function Grid({ blok } : { blok: Grid }) {
  return (
    <div className="grid">
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}