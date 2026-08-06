/**
 * Demo content for the "Följ din bil" section and the /sa-fungerar-det page.
 *
 * The statuses, labels, descriptions and tones below mirror the CarFlow
 * workshop system (`src/lib/status.ts` in the CRM) so the marketing mockups
 * show the customer exactly what they will actually receive. If the CRM's
 * status list changes, update this file to match.
 */

export type CarflowTone = 'info' | 'warning' | 'success'

export type CarflowUpdate = {
  status: string
  /** Customer-facing label, as shown in the CarFlow portal. */
  label: string
  /** Generic description the portal always shows under the label. */
  description: string
  tone: CarflowTone
  time: string
  /** Icon name resolved in the mockup component. */
  icon:
    | 'clipboard'
    | 'car'
    | 'search'
    | 'wrench'
    | 'alert'
    | 'check'
    | 'cog'
    | 'flag'
    | 'key'
  badge?: 'action' | 'approved'
  /** Extra note the workshop attached to this update. */
  note?: string
  /** Number of photos/videos attached by the mechanic. */
  media?: number
}

export const demoVehicle = {
  registration: 'XMB 04K',
  make: 'Volvo',
  model: 'V60 D4',
  year: 2018,
  customer: 'Anna Lindqvist',
}

/** The timeline as the customer sees it, in the order the workshop logs it. */
export const demoTimeline: Array<CarflowUpdate> = [
  {
    status: 'car_dropped_off',
    label: 'Bil inlämnad',
    description: 'Din bil har tagits emot hos oss.',
    tone: 'info',
    time: 'Idag 08:12',
    icon: 'car',
  },
  {
    status: 'diagnosis_started',
    label: 'Felsökning påbörjad',
    description: 'Vi har påbörjat felsökning och diagnostisering av ditt fordon.',
    tone: 'info',
    time: 'Idag 08:45',
    icon: 'search',
  },
  {
    status: 'started_work',
    label: 'Arbete påbörjat',
    description:
      'Inledande inspektion klar. Vi påbörjar nu det rekommenderade arbetet.',
    tone: 'info',
    time: 'Idag 09:20',
    icon: 'wrench',
    note: 'Oljebyte och filterbyte enligt bokning. Bromsarna kontrolleras samtidigt.',
  },
  {
    status: 'quote_sent',
    label: 'Offert',
    description:
      'Vi har hittat ytterligare arbete som behöver göras. Vi inväntar ditt godkännande.',
    tone: 'warning',
    time: 'Idag 10:38',
    icon: 'alert',
    badge: 'action',
    note: 'Bromsklossarna fram är nere på 2 mm. Vi rekommenderar byte innan du kör vidare.',
    media: 3,
  },
  {
    status: 'quote_approved',
    label: 'Godkänd kostnad',
    description: 'Kostnaden är godkänd. Vi fortsätter nu med jobbet.',
    tone: 'success',
    time: 'Idag 10:52',
    icon: 'check',
    badge: 'approved',
  },
  {
    status: 'in_progress',
    label: 'Pågående arbete',
    description: 'Arbete pågår just nu på ditt fordon.',
    tone: 'info',
    time: 'Idag 11:15',
    icon: 'cog',
  },
  {
    status: 'job_done',
    label: 'Jobb klart',
    description: 'Allt arbete är klart. Din bil är redo att hämtas.',
    tone: 'success',
    time: 'Idag 14:30',
    icon: 'flag',
  },
]

/** The quote the customer approves or rejects from their phone. */
export const demoQuote = {
  title: 'Offert',
  description:
    'Bromsklossarna fram är nere på 2 mm och skivorna har tydliga spår. Vi rekommenderar byte av klossar och skivor fram innan du kör vidare. Bilder bifogade.',
  lines: [
    { label: 'Bromsklossar fram (sats)', qty: 1, price: 1190 },
    { label: 'Bromsskivor fram (par)', qty: 1, price: 1840 },
    { label: 'Arbete, 1,5 tim', qty: 1, price: 1275 },
  ],
  priorApproved: 1495,
  media: 3,
}

/** Chat between the customer and the workshop, oldest first. */
export const demoChat: Array<{ from: 'workshop' | 'customer'; body: string; time: string }> =
  [
    {
      from: 'workshop',
      body: 'Hej Anna! Bilen är inne och vi har börjat titta på den. Vi hör av oss så fort vi vet mer.',
      time: '08:47',
    },
    {
      from: 'customer',
      body: 'Tack! Går det att få den klar innan 16 idag?',
      time: '09:02',
    },
    {
      from: 'workshop',
      body: 'Det ska gå bra. Vi skickade precis en offert på bromsarna fram — godkänner du den så hinner vi allt idag.',
      time: '10:39',
    },
    { from: 'customer', body: 'Godkänt! Kör på.', time: '10:52' },
    {
      from: 'workshop',
      body: 'Perfekt, tack. Bilen är klar och står utanför. Nycklarna ligger i receptionen.',
      time: '14:31',
    },
  ]

/** The five steps shown on /sa-fungerar-det. */
export const carflowSteps = [
  {
    title: 'Du bokar tid',
    body: 'Boka online eller ring oss. Din tid, din bil och ditt ärende registreras direkt i vårt verkstadssystem – inget hamnar på en papperslapp.',
  },
  {
    title: 'Du lämnar in bilen',
    body: 'Vid inlämning får du ett SMS med en personlig länk till ditt ärende. Du loggar in med ditt telefonnummer – inget konto, inget lösenord, ingen app att ladda ner.',
  },
  {
    title: 'Du följer arbetet i realtid',
    body: 'Varje gång något händer med din bil – felsökning påbörjad, arbete igång, jobb klart – uppdateras din sida och du får en notis. Du behöver aldrig ringa och fråga hur det går.',
  },
  {
    title: 'Du godkänner innan vi rör bilen',
    body: 'Hittar vi något extra får du en offert med bilder, specificerade rader och totalsumma. Ingenting utförs förrän du tryckt Godkänn. Inga överraskningar på fakturan.',
  },
  {
    title: 'Du hämtar bilen',
    body: 'Du får en notis när bilen är klar. Hela ärendet – alla uppdateringar, bilder, offerter och meddelanden – finns kvar som dokumentation på din bil.',
  },
] as const
