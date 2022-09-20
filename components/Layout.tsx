import { Navigation } from "./Navigation"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <main>
      <Navigation />
      {props.children}
    </main>
  )
}
