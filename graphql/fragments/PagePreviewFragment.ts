import { gql } from "@apollo/client"
import { IconFragment } from "./IconFragment"

export const PagePreviewFragment = gql`
  fragment PagePreviewFragment on PagePreview {
    title
    slug
    description {
      html
    }
    icon {
      ...IconFragment
    }
  }
  ${IconFragment}
`
