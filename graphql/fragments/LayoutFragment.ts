import { gql } from "@apollo/client"
import { IconFragment } from "./IconFragment"

export const LayoutFragment = gql`
  fragment Layout on Layout {
    route
    hero {
      backgroundColor {
        css
      }
      backgroundImage {
        id
        url
      }
      heading
      subHeading
      icon {
        ...Icon
      }
    }
  }
  ${IconFragment}
`
