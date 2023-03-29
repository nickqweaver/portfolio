import Link from "next/link"
import React from "react"

type ButtonProps = {
  title: string
  onClick?: () => void
  href?: string
  type: "primary" | "secondary"
}

export const Button = (props: ButtonProps) => {
  const { href, ...rest } = props

  const ButtonElement = React.forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "href">
  >(function ButtonElement(props, ref) {
    const type =
      rest.type === "primary"
        ? "bg-blue-light text-white"
        : "bg-sheet text-primary"
    return (
      <button
        ref={ref}
        className={`py-2 px-3 text-sm rounded-lg font-semibold ${type}`}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    )
  })

  if (href) {
    return (
      <Link href={props.href as string} passHref>
        <ButtonElement {...rest} />
      </Link>
    )
  }

  return <ButtonElement {...rest} />
}
