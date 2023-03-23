import * as FeatherIcon from "react-feather"
import { IconNames as GeneratedIconNames } from "../graphql/generated/schema-types"

export enum IconNames {
  Hamburger = "hamburger",
  Github = "github",
  Twitter = "twitter",
  LinkedIn = "linkedin",
  Location = "location",
  Email = "email",
  Phone = "phone",
  Web = "web",
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
    case Icons.Github:
      return <FeatherIcon.GitHub {...rest} />
    case Icons.Email:
      return <FeatherIcon.Mail {...rest} />
    case Icons.LinkedIn:
      return <FeatherIcon.Linkedin {...rest} />
    case Icons.Phone:
      return <FeatherIcon.Phone {...rest} />
    case Icons.Location:
      return <FeatherIcon.MapPin {...rest} />
    case Icons.Twitter:
      return <FeatherIcon.Twitter {...rest} />
    case Icons.Web:
      return <FeatherIcon.Globe {...rest} />
    default:
      return <></>
  }
}
