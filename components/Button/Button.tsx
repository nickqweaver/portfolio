type ButtonProps = {
  title: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return <button className="bg-sheet p-3 text-primary">{props.title}</button>
}
