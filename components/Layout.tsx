import { Navigation, NavigationProps } from "./Navigation"

type LayoutProps = {
  children: React.ReactNode
  navigation?: NavigationProps
}

export const Layout = (props: LayoutProps) => {
  return (
    <main>
      <Navigation {...props.navigation} />
      {props.children}
    </main>
  )
}
