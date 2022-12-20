import { gql } from "@apollo/client"
import { IconFragment } from "./IconFragment"

export const MediaFragment = gql`
  fragment MediaFragment on MediaAsset {
    id
    order
    media {
      url
    }
  }
  ${IconFragment}
`
