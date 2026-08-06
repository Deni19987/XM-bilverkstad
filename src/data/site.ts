export const site = {
  name: 'XM Bilverkstad',
  legalName: 'XM Bilverkstad AB',
  url: 'https://xmbilverkstad.se',
  phone: '+46 8 660 08 88',
  phoneHref: 'tel:+4686600888',
  whatsapp: 'https://wa.me/4686600888',
  email: 'info@xmbilverkstad.se',
  maps: 'https://maps.google.com/?q=XM+Bilverkstad+AB,Anläggarvägen+20,136+44+Handen',
  facebook: 'https://www.facebook.com/p/XM-Bilverkstad-AB-100088559993988/',
  instagram: 'https://www.instagram.com/xm_bilverkstad/',
  address: {
    street: 'Anläggarvägen 20',
    postalCode: '136 44',
    city: 'Handen',
    region: 'Stockholm',
    country: 'SE',
  },
  hours: [
    { day: 'Mån - Fre', time: '08:00 - 17:00' },
    { day: 'Lördag', time: 'Stängt' },
    { day: 'Söndag', time: 'Stängt' },
  ],
  rating: { value: '5.0', count: 583 },
  tagline:
    'XM Bilverkstad i Handen – din lokala bilverkstad i Haninge och södra Stockholm. Bilservice, däckbyte, däckhotell, bromsbyte och oljebyte med fasta priser.',
} as const

export const navigation = [
  { label: 'Tjänster', to: '/tjanster' },
  { label: 'Så fungerar det', to: '/sa-fungerar-det' },
  { label: 'Boka', to: '/boka' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Omdömen', to: '/omdomen' },
  { label: 'Kontakt', to: '/kontakt' },
] as const
