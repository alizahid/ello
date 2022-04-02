/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  reactStrictMode: true
}

module.exports = nextConfig
