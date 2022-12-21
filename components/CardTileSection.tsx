import Link from "next/link"

type CardTileSection = {
  children: React.ReactNode
  title: string
  link: {
    title: string
    href: string
  }
}

export const CardTileSection = (props: CardTileSection) => {
  const { children, title, link } = props
  return (
    <section className="p-5 sm:p-10 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-primary text-xl font-bold">{title}</h1>
        <Link href={`/${link.href}`}>
          <a className="text-links text-l">{link.title}</a>
        </Link>
      </div>
      <div className="grid grid-cols-4	gap-x-2">{children}</div>
    </section>
  )
}
