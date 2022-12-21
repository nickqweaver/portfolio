import * as FeatherIcon from "react-feather"
import { IconNames as GeneratedIconNames } from "../graphql/generated/schema-types"

export enum IconNames {
  Hamburger = "hamburger",
}
export const Icons = { ...GeneratedIconNames, ...IconNames }
export type Icons = typeof Icons

export const Icon = (
  props: { name: IconNames | GeneratedIconNames } & FeatherIcon.IconProps
) => {
  const { name, ...rest } = props
  switch (name) {
    case Icons.Code:
      return <FeatherIcon.Code {...rest} />
    case Icons.Download:
      return <FeatherIcon.Download {...rest} />
    case Icons.Zap:
      return <FeatherIcon.Zap {...rest} />
    case Icons.Monitor:
      return <FeatherIcon.Monitor {...rest} />
    case Icons.Hamburger:
      return <FeatherIcon.Menu {...rest} />
    default:
      return <></>
  }
}
