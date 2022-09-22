import { gql } from "@apollo/client"
import { IconFragment } from "./IconFragment"

export const LayoutFragment = gql`
  fragment LayoutFragment on Layout {
    route
    hero {
      backgroundColor {
        css
      }
      heading
      subHeading
      icon {
        ...IconFragment
      }
    }
  }
  ${IconFragment}
`
