import { gql } from "@apollo/client"
import { PagePreviewFragment } from "../fragments/PagePreviewFragment"

export const GET_PAGE_PREVIEWS = gql`
  query GetPagePreviews {
    pagePreviews {
      ...PagePreviewFragment
    }
  }
  ${PagePreviewFragment}
`
