import Link from "next/link"
import React from "react"

type ButtonProps = {
  title: string
  onClick?: () => void
  href: string
}

export const Button = (props: ButtonProps) => {
  const { href, ...rest } = props

  const ButtonElement = React.forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "href">
  >(function ButtonElement(props, ref) {
    return (
      <button
        ref={ref}
        className="bg-sheet p-3 text-primary text-sm rounded-lg font-semibold"
        onClick={props.onClick}
      >
        {props.title}
      </button>
    )
  })

  if (href) {
    return (
      <Link href={props.href} passHref>
        <ButtonElement {...rest} />
      </Link>
    )
  }

  return <ButtonElement {...rest} />
}
