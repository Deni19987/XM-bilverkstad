import { Star } from 'lucide-react'

import { recoProfile, recoReviews } from '@/data/reco-reviews'

function RecoWordmark({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <img
      src="/reco-logo.svg"
      alt="Reco"
      width={104}
      height={28}
      loading="lazy"
      className={className}
    />
  )
}

function Rating({ value }: { value: number }) {
  return (
    <div className="flex gap-1" aria-label={`${value} av 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={
            index < value ? 'size-3.5 fill-brand text-brand' : 'size-3.5 text-hairline-strong'
          }
        />
      ))}
    </div>
  )
}

/**
 * Omdömen hämtade från Reco. Reco-märket ligger både i sektionshuvudet och på
 * varje kort så att det aldrig råder tvivel om varifrån omdömena kommer.
 *
 * Texterna i `recoReviews` är platshållare och ska bytas mot riktiga omdömen
 * innan sajten publiceras.
 */
export function RecoReviews() {
  return (
    <section className="section-padding border-t border-hairline bg-canvas">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-hairline-strong pb-6">
          <div>
            <p className="eyebrow">Omdömen</p>
            <h2 className="display mt-3.5 text-3xl leading-none text-white md:text-[2.6rem]">
              Vad kunderna skriver på Reco
            </h2>
          </div>

          <a
            href={recoProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-hairline px-4 py-3 transition-colors duration-300 hover:border-brand/40"
          >
            <RecoWordmark />
            <span className="border-l border-hairline pl-4">
              <span className="numeric block text-lg leading-none text-white">
                {recoProfile.rating} / 5
              </span>
              <span className="mt-1 block text-xs text-ink-3">
                {recoProfile.count} omdömen
              </span>
            </span>
          </a>
        </div>

        {/*
          På telefon blir sex staplade kort två skärmars scroll innan man
          kommer vidare. Där ligger de i stället på en svepbar rad, ett kort i
          taget. Från medelbredd och upp är det ett vanligt rutnät igen.
        */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pt-11 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:gap-x-11 md:gap-y-10 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {recoReviews.map((review) => (
            <li
              key={`${review.name}-${review.date}`}
              className="w-[78%] shrink-0 snap-start md:w-auto md:shrink"
            >
              <a
                href={recoProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border-t-2 border-hairline-strong pt-5 transition-colors duration-300 hover:border-brand"
              >
                <div className="flex items-center justify-between gap-4">
                  <Rating value={review.rating} />
                  <RecoWordmark className="h-4 w-auto opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <blockquote className="mt-4 leading-relaxed text-ink-2 transition-colors duration-300 group-hover:text-ink">
                  {review.text}
                </blockquote>

                <footer className="numeric mt-5 text-[0.72rem] tracking-[0.06em] text-ink-3 uppercase">
                  <span className="text-ink">{review.name}</span> · {review.car} ·{' '}
                  {review.service}
                </footer>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink-3">
          Omdömena är hämtade från vår profil på{' '}
          <a
            href={recoProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Reco
          </a>
          , där vem som helst kan läsa dem i sin helhet.
        </p>
      </div>
    </section>
  )
}
