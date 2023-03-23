import { gql } from "@apollo/client"

export const GET_PAGE_PREVIEWS = gql`
  query GetPagePreviews {
    pagePreviews {
      ...PagePreview
    }
  }
`
