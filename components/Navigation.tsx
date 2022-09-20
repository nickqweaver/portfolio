import Link from "next/link"

export const Navigation = () => {
  return (
    <nav className="w-screen h-16 grid grid-cols-2">
      <div></div>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <Link href="/resume">Resume</Link>
        <Link href="/work">Professional Work</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
