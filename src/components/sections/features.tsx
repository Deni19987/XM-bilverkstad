import { Award, BellRing, Car, FileCheck2, Tag, Timer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const features: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Award,
    title: 'Certifierade Mekaniker',
    body: 'Erfarna bilmekaniker i Haninge med specialistkunskap inom alla bilmärken och modeller.',
  },
  {
    icon: Timer,
    title: 'Snabb Service',
    body: 'De flesta jobb klara samma dag. Oljebyte på 45 min, däckbyte på 30 min.',
  },
  {
    icon: Tag,
    title: 'Fasta Priser',
    body: 'Inga dolda avgifter. Du får alltid ett fast pris innan vi börjar arbeta.',
  },
  {
    icon: Car,
    title: 'Alla Bilmärken',
    body: 'Vi servar och reparerar alla bilmärken – din nybilsgaranti gäller hos oss.',
  },
  {
    icon: BellRing,
    title: 'Notis Vid Varje Steg',
    body: 'Följ bilen i mobilen från inlämning till klar. Du får en avisering varje gång något händer.',
  },
  {
    icon: FileCheck2,
    title: 'Du Godkänner Först',
    body: 'Tilläggsarbete visas med bilder och pris i mobilen. Inget utförs innan du tryckt godkänn.',
  },
]

export function Features() {
  return (
    <section className="section-padding border-b border-white/5 bg-zinc-950">
      <div className="site-container relative z-10">
        <h2 className="sr-only">Varför välja XM Bilverkstad i Haninge</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900"
            >
              <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <feature.icon className="size-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
