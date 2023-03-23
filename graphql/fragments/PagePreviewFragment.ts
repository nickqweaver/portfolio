import { gql } from "@apollo/client"

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
`
