export const SITE_CONFIG = {
  whatsappNumber: '916383597098',
  email: 'info@preyova.in',
  phone: '+91 63835 97098',
  phoneHref: '+916383597098',
  location: '49/12, Anand Apartment, Mylapore, Chennai, Tamil Nadu 600004, India',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about', end: true },
  { label: 'Services', to: '/services', end: true },
  { label: 'Solutions', to: '/solutions', end: true },
  { label: 'Technologies', to: '/#technologies', end: false, hashLink: true },
  { label: 'Portfolio', to: '/portfolio', end: true },
  { label: 'Contact', to: '/contact', end: true },
]

export const SOCIAL_PLACEHOLDERS = [
  { icon: 'bi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/preyova-technologies/' },
  { icon: 'bi-instagram', label: 'Instagram', href: 'https://www.instagram.com/preyovatechnologies/' },
  { icon: 'bi-facebook', label: 'Facebook (placeholder)' },
]

export const FOOTER_COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_SERVICE_LINKS = [
  { label: 'Web Development', to: '/services#web-development' },
  { label: 'Mobile Apps', to: '/services#mobile-development' },
  { label: 'Software Development', to: '/services#custom-software' },
  { label: 'E-Commerce', to: '/services#ecommerce' },
]

export const FOOTER_RESOURCE_LINKS = [
  { label: 'FAQ', to: '/#faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Case Studies', to: '/portfolio' },
  { label: 'Support', to: '/support' },
  { label: 'Documentation', to: '/docs' },
]

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}`
