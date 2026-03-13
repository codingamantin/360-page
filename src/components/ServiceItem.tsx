import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { ServiceItem } from '../../.storyblok/types/290932035929349/storyblok-components'
import { Icon } from '@iconify/react'

interface IconifyField {
  _uid: string
  icon: string
  plugin: 'iconify'
}

export default function ServiceItem({ blok }: { blok: ServiceItem }) {
  const iconField = blok.icon as IconifyField
  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      {iconField.icon && <Icon className="w-8 h-8 text-taupe mb-6 group-hover:text-khaki transition-colors duration-500" icon={iconField.icon} />}

      <h3 className="font-display text-xl text-foreground mb-3">
        {blok.title}
      </h3>
      <p className="font-body text-sm text-taupe font-light leading-relaxed">
        {blok.description}
      </p>
    </div>
  )
}
