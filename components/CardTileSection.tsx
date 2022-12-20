import Link from "next/link"

type CardTileSection = {
  children: React.ReactNode
}

export const CardTileSection = (props: CardTileSection) => {
  const { children } = props
  return (
    <section className="p-8 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-primary text-xl font-bold">Recent Work</h1>
        <Link href="/projects">
          <a className="text-links text-l">See More</a>
        </Link>
      </div>
      <div className="grid grid-cols-4	gap-x-2">{children}</div>
    </section>
  )
}
