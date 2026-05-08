import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  preset: 'cloudflare-pages',
  compatibilityDate: '2025-07-13',
  cloudflare: {
    deployConfig: true,
    nodeCompat: true,
  },
})
