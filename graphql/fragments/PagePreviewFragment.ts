import { gql } from "@apollo/client"

export const PagePreviewFragment = gql`
  fragment PagePreviewFragment on Page {
    title
    slug
    showPreview
    icon {
      name
      size
    }
  }
`
