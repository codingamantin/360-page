import type { Feature } from "../../.storyblok/types/290932035929349/storyblok-components";

export default function Feature({ blok } : { blok: Feature}) {
  return (
    <div className="feature">
      <span>{blok.name}</span>
    </div>
  );
}