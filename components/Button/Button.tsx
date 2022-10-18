import Link from "next/link"

type ButtonProps = {
  title: string
  onClick?: () => void
  href?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="bg-sheet p-3 text-primary text-sm rounded-lg font-semibold">
      <Link href={props.href}>{props.title}</Link>
    </button>
  )
}
