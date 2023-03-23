import { useState } from "react"
import useEventListener from "./useEventListener"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

type WindowSize = {
  width: number
  height: number
}

export const useWindow = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEventListener("resize", handleSize)

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}
