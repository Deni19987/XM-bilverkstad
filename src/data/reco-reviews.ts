/**
 * PLATSHÅLLARE – dessa omdömen är påhittade.
 *
 * Innehållet finns här för att sektionen ska gå att bygga och granska innan
 * den riktiga Reco-datan är på plats. Byt ut hela listan, betyget och antalet
 * mot verkliga omdömen från XM Bilverkstads Reco-profil innan sajten läggs ut.
 * Publicera aldrig den här texten som om den vore riktiga kundomdömen.
 */
export type RecoReview = {
  name: string
  text: string
  car: string
  service: string
  date: string
  rating: number
}

export const recoProfile = {
  name: 'Reco',
  url: 'https://www.reco.se/',
  /** PLATSHÅLLARE – ersätt med det verkliga betyget från Reco. */
  rating: '4,8',
  /** PLATSHÅLLARE – ersätt med det verkliga antalet omdömen. */
  count: 128,
} as const

/** PLATSHÅLLARE – ersätt med riktiga omdömen från Reco. */
export const recoReviews: Array<RecoReview> = [
  {
    name: 'Andreas W.',
    text: 'Lämnade in bilen på morgonen och fick en offert innan de började. Slutnotan blev exakt vad de sagt, ingen överraskning på fakturan.',
    car: 'Volvo V60 (2016)',
    service: 'Bromsservice',
    date: '12 aug 2025',
    rating: 5,
  },
  {
    name: 'Sofia L.',
    text: 'De hittade ett fel till under servicen, ringde och förklarade vad det skulle kosta och väntade på mitt svar. Precis så jag vill att en verkstad ska jobba.',
    car: 'Volkswagen Golf (2019)',
    service: 'Basservice',
    date: '29 juli 2025',
    rating: 5,
  },
  {
    name: 'Mehmet K.',
    text: 'Bytte hjul på trettio minuter medan jag väntade. Fick dessutom veta att mönsterdjupet börjar ta slut fram, utan att de försökte sälja på mig nya däck direkt.',
    car: 'Toyota Auris (2014)',
    service: 'Hjulbyte',
    date: '3 juli 2025',
    rating: 5,
  },
  {
    name: 'Camilla R.',
    text: 'Motorlampan lyste och två andra verkstäder ville byta halva avgassystemet. Här läste de av felkoden och löste det för en bråkdel. Ärligt bemötande.',
    car: 'Ford Focus (2013)',
    service: 'Felsökning',
    date: '21 juni 2025',
    rating: 5,
  },
  {
    name: 'Jonas P.',
    text: 'Bra jobb och tydlig genomgång efteråt. Fick vänta lite längre än utlovat eftersom en del var slut på lager, men de hörde av sig så fort de visste.',
    car: 'Audi A4 (2017)',
    service: 'Oljebyte inkl. filter',
    date: '9 juni 2025',
    rating: 4,
  },
  {
    name: 'Elin S.',
    text: 'Gick igenom bilen inför besiktningen och listade exakt vad som behövde åtgärdas. Godkänd på första försöket, vilket den inte varit på flera år.',
    car: 'Kia Ceed (2015)',
    service: 'Kontroll inför besiktning',
    date: '27 maj 2025',
    rating: 5,
  },
]
