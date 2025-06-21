
export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/doctors', label: 'Врачи' },
  { href: '/about', label: 'О нас' },
  { href: '/contacts', label: 'Контакты' },
] as const

export const CONTACT_INFO = {
  phone: '+7 (XXX) XXX-XX-XX',
  email: 'info@tochka-opory.ru',
  address: 'г. Орёл, ул. Покровская, д. 32',
} as const
