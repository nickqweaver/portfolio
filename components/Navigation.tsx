import Link from "next/link"
import { routes } from "../constants/routes"

export const Navigation = () => {
  const gridColumns = `grid-cols-4`
  // const gridColumns = `grid-cols-${routes.length ?? 1}`
  return (
    <nav
      className="w-screen h-16 grid grid-cols-2 absolute"
      style={{ zIndex: 2 }}
    >
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className={`grid ${gridColumns} justify-items-center items-center`}>
        {routes.map((route) => (
          <Link key={route.slug} href={route.slug}>
            {route.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
