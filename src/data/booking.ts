/** The nine packages offered in the booking wizard's first step. */
export const bookingServices = [
  { value: 'oljebyte', label: 'Oljebyte & Mellanservice', from: 1495 },
  { value: 'bromsbyte', label: 'Byte av Bromsar', from: 2000 },
  { value: 'dack-dackbyte', label: 'Däckbyte & Däckhotell', from: 350 },
  { value: 'felsokning-diagnos', label: 'Felsökning & Diagnos', from: 875 },
  { value: 'bilservice', label: 'Bilservice & Underhåll', from: 2750 },
  { value: 'besiktningskontroll', label: 'Kontroll inför Besiktning', from: 500 },
  { value: 'bilkontroll', label: 'Bilkontroll', from: 1250 },
  { value: 'bilrekond', label: 'Bilrekond & Rengöring', from: 450 },
  { value: 'motoroptimering', label: 'Motoroptimering & Chiptuning', from: 4990 },
] as const

export type BookingServiceValue = (typeof bookingServices)[number]['value']

/**
 * Maps a service-detail slug onto the booking package it belongs to, so the
 * "Boka Tid" buttons on a service page preselect the right option.
 */
export const slugToBookingService: Record<string, BookingServiceValue> = {
  'hjulbyte-handen': 'dack-dackbyte',
  'hjulbyte-inkl-forvaring-handen': 'dack-dackbyte',
  'dackbyte-inkl-hjulbyte-handen': 'dack-dackbyte',
  'dackbyte-inkl-hjulbyte-och-forvaring-handen': 'dack-dackbyte',
  'kontroll-infor-besiktning-exkl-ordinarie-besiktning-handen': 'besiktningskontroll',
  'kontroll-infor-besiktning-inkl-ordinarie-besiktning-handen': 'besiktningskontroll',
  'felsokning-handen': 'felsokning-diagnos',
  'bilkontroll-handen': 'bilkontroll',
  'invandig-och-utvandig-rengoring-handen': 'bilrekond',
  'utvandig-rengoring-handen': 'bilrekond',
  'invandig-rengoring-handen': 'bilrekond',
  'basservice-handen': 'bilservice',
  'oljebyte-motor-inkl-filter-handen': 'oljebyte',
  'bromsservice-handen': 'bromsbyte',
  'steg-1-motoroptimering-handen': 'motoroptimering',
  'steg-2-motoroptimering-handen': 'motoroptimering',
  'vaxelladsoptimering-handen': 'motoroptimering',
}

export const timeSlots = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
] as const
