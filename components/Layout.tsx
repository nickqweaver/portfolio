import { useRouter } from "next/router"
import { Navigation } from "./Navigation/Navigation"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const router = useRouter()
  const navigationVariation = router.route === "/" ? "transparent" : "filled"
  return (
    <main>
      <Navigation variation={navigationVariation} />
      {props.children}
    </main>
  )
}
