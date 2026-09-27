export const site = {
  name: 'KBCoding',
  legalName: 'KBCoding',
  tagline: 'Software development',
  location: 'Salt Lake City, Utah',
  url: 'https://kbcoding.com',
  email: 'hello@kbcoding.com',
  updated: 'September 27, 2026',
  year: 2026,
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
] as const
