import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <div className="page-wrapper">
      <div className="site-container flex flex-col items-center py-24 text-center">
        <span className="mb-4 text-sm font-bold tracking-widest text-blue-500 uppercase">
          404
        </span>
        <h1 className="mb-4 text-4xl font-bold text-white">Sidan hittades inte</h1>
        <p className="mb-10 max-w-md text-zinc-400">
          Sidan du letar efter finns inte längre. Gå tillbaka till startsidan eller se
          våra tjänster.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/">Till startsidan</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/tjanster">Se våra tjänster</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
