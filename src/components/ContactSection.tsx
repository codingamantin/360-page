import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react'
import type { SbBlokData } from '@storyblok/react'
import type { ContactSection as ContactSectionBlok } from '../../.storyblok/types/290932035929349/storyblok-components'

export default function ContactSection({ blok }: { blok: ContactSectionBlok }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const inputClasses =
    'w-full bg-transparent border-b border-taupe/30 py-3 font-body text-sm text-foreground placeholder:text-taupe/50 focus:border-khaki focus:outline-none transition-colors duration-300'

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      id="contact"
      className="bg-leather py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">
              {blok.eyebrow ?? 'Get in Touch'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
              {blok.headingLine1 ?? "Let's create"}
              <br />
              <span className="italic">
                {blok.headingEmphasis ?? 'something'}
              </span>
              <br />
              {blok.headingLine2 ?? 'extraordinary'}
            </h2>
            <p className="font-body text-base text-taupe font-light leading-relaxed max-w-md mb-12">
              {blok.description ??
                "Tell us about your project. We'd love to learn about your vision and explore how we can bring it to life."}
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mb-1">
                  {blok.emailLabel ?? 'Email'}
                </p>
                <p className="font-body text-sm text-foreground">
                  {blok.email ?? 'hello@studio360.com'}
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mb-1">
                  {blok.phoneLabel ?? 'Phone'}
                </p>
                <p className="font-body text-sm text-foreground">
                  {blok.phone ?? '+1 (555) 360-0000'}
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mb-1">
                  {blok.studioLabel ?? 'Studio'}
                </p>
                <p className="font-body text-sm text-foreground">
                  {blok.studio ?? '123 Design Avenue, New York, NY 10001'}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className={inputClasses}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className={inputClasses}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className={inputClasses}
              />

              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectType: e.target.value,
                  })
                }
                className={`${inputClasses} appearance-none cursor-pointer`}
                required
              >
                <option value="" disabled className="bg-leather text-taupe">
                  Project Type
                </option>
                <option
                  value="residential"
                  className="bg-leather text-foreground"
                >
                  Residential
                </option>
                <option
                  value="commercial"
                  className="bg-leather text-foreground"
                >
                  Commercial
                </option>
                <option
                  value="renovation"
                  className="bg-leather text-foreground"
                >
                  Renovation
                </option>
                <option
                  value="consultation"
                  className="bg-leather text-foreground"
                >
                  Consultation Only
                </option>
              </select>

              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className={`${inputClasses} resize-none`}
              />

              <button
                type="submit"
                className="w-full font-body text-sm tracking-widest uppercase py-4 bg-taupe text-leather hover:bg-khaki transition-colors duration-300"
              >
                {blok.submitLabel ?? 'Book a Consultation'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
