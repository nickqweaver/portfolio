import { gql } from "@apollo/client"
import { PagePreviewFragment } from "graphql/fragments/PagePreviewFragment"

export const GET_PAGE_PREVIEWS = gql`
  query GetPagePreviews {
    pagePreviews {
      ...PagePreview
    }
  }
  ${PagePreviewFragment}
`
