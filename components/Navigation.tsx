import Link from "next/link"

export type NavigationLink = {
  title: string
  slug: string
}

export type NavigationProps = {
  links?: NavigationLink[]
}
export const Navigation = (props: NavigationProps) => {
  const gridColumns = `grid-cols-${props.links?.length ?? 1}`
  return (
    <nav className="w-screen h-16 grid grid-cols-2">
      <div>Logo</div>
      <div className={`grid ${gridColumns} justify-items-center items-center`}>
        {props.links?.map((link) => (
          <Link key={link.slug} href={link.slug}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
