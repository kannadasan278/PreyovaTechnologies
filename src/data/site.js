export const SITE_CONFIG = {
  whatsappNumber: '919XXXXXXXXX',
  email: 'info@preyova.in',
  phone: '+91 XXXXX XXXXX',
  phoneHref: '+919XXXXXXXXX',
  location: 'Chennai, Tamil Nadu, India',
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
  { icon: 'bi-linkedin', label: 'LinkedIn (placeholder)' },
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
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
]

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}`
