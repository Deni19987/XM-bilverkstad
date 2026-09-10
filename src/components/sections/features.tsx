/**
 * Fyra löften som remsa med hårfina avdelare i stället för kort. Värdet står i
 * Archivo överst så raden går att läsa på en halv sekund.
 */
const features = [
  {
    value: '45 min',
    title: 'Oljebyte medan du väntar',
    body: 'De flesta jobb blir klara samma dag. Ett hjulbyte tar runt 30 minuter.',
  },
  {
    value: '2 år',
    title: 'Garanti på utfört arbete',
    body: 'Nybilsgarantin påverkas inte av att du servar bilen hos oss.',
  },
  {
    value: 'Fast',
    title: 'Pris innan vi börjar',
    body: 'Hittar vi något mer ringer vi. Inget görs innan du har sagt ja.',
  },
  {
    value: 'Alla',
    title: 'Märken och modeller',
    body: 'Samma OBD-diagnos som märkesverkstaden, oavsett vad du kör.',
  },
]

export function Features() {
  return (
    <section className="border-b border-hairline bg-canvas-2">
      <div className="site-container">
        <h2 className="sr-only">Varför välja XM Bilverkstad i Haninge</h2>

        <ul className="grid gap-px bg-hairline md:-mx-7 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="group bg-canvas-2 py-8 transition-colors duration-300 hover:bg-panel md:px-7"
            >
              <p className="font-display text-[1.75rem] leading-none font-extrabold tracking-[-0.02em] text-brand">
                {feature.value}
              </p>
              <h3 className="mt-3 font-semibold text-white">{feature.title}</h3>
              <p className="mt-1.5 text-[0.87rem] leading-relaxed text-ink-3 transition-colors duration-300 group-hover:text-ink-2">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
