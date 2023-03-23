import config from "../tailwind.config"
import resolveConfig from "tailwindcss/resolveConfig"

/**
 * As of now Tailwind doesn't provide concrete types from the config because the keys can be dynamic,
 * for now I'm mapping the types I need indivisually
 */

type Screen = {
  sm: string
  md: string
  lg: string
  xl: string
  "2xl": string
}

export const isScreenType = (valueToCheck: any): valueToCheck is Screen => {
  const screen = valueToCheck as Screen

  return (
    Object.hasOwn(screen, "sm") &&
    Object.hasOwn(screen, "md") &&
    Object.hasOwn(screen, "lg") &&
    Object.hasOwn(screen, "xl") &&
    Object.hasOwn(screen, "2xl")
  )
}

export const useBreakPoint = (breakPoint: keyof Screen) => {
  const { theme } = resolveConfig(config)
  const screens = theme?.screens

  if (isScreenType(screens)) {
    return parseInt(screens[breakPoint])
  }
}
