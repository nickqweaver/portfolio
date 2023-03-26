import { useBreakPoint } from "hooks/useBreakpoint"
import { useWindow } from "hooks/useWindow"

export const Labels = (props: { children: React.ReactNode }) => {
  const { width } = useWindow()

  const smallBreakPoint = useBreakPoint("sm")
  const mediumBreakPoint = useBreakPoint("md")
  const largeBreakPoint = useBreakPoint("lg")

  const mapBreakPointStyle = (
    xs: string,
    sm: string,
    md: string,
    lg: string
  ) => {
    if (smallBreakPoint && largeBreakPoint && mediumBreakPoint) {
      return width <= smallBreakPoint
        ? xs
        : width <= mediumBreakPoint
        ? sm
        : width <= largeBreakPoint
        ? md
        : lg
    }

    return sm
  }

  return (
    <div
      className="grid gap-2 my-10 "
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${mapBreakPointStyle(
          "64px",
          "84px",
          "96px",
          "120px"
        )}, 1fr))`,
      }}
    >
      {props.children}
    </div>
  )
}
