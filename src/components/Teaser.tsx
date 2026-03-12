import type { Teaser } from "../../.storyblok/types/290932035929349/storyblok-components";

export default function Teaser({ blok } : { blok: Teaser }) {
  return (
    <div className="teaser">
      <h2>{blok.headline}</h2>
    </div>
  );
}