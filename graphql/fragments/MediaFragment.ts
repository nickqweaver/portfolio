import { gql } from "@apollo/client"

export const MediaFragment = gql`
  fragment Media on MediaAsset {
    id
    order
    media {
      url
    }
  }
`
