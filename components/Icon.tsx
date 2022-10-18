import * as FeatherIcon from "react-feather"
import { IconNames } from "../graphql/generated/schema-types"

export const Icon = (props: { name: IconNames } & FeatherIcon.IconProps) => {
  const { name, ...rest } = props
  switch (name) {
    case IconNames.Code:
      return <FeatherIcon.Code {...rest} />
    case IconNames.Download:
      return <FeatherIcon.Download {...rest} />
    case IconNames.Zap:
      return <FeatherIcon.Zap {...rest} />
    case IconNames.Monitor:
      return <FeatherIcon.Monitor {...rest} />
  }
}
