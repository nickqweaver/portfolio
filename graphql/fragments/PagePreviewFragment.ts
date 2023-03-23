import { gql } from "@apollo/client"
import { IconFragment } from "./IconFragment"

export const PagePreviewFragment = gql`
  fragment PagePreview on PagePreview {
    title
    slug
    description {
      html
    }
    icon {
      ...Icon
    }
  }
  ${IconFragment}
`
