import { useCallback, useEffect, useState } from "react"
import { useDebounce } from "./useDebounce"

export const useScrollPosition = (delay?: number) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const debouncedPosition = useDebounce(position, delay ?? 0)

  const onScroll = useCallback(() => {
    setPosition({
      x: window.scrollX,
      y: window.scrollY,
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  return debouncedPosition
}
