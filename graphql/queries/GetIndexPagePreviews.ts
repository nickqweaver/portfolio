import { gql } from "@apollo/client"
import { PagePreviewFragment } from "../fragments/PagePreviewFragment"

export const GET_INDEX_PAGE_PREVIEWS = gql`
  query GetIndexPagePreviews {
    indexPages {
      ...PagePreviewFragment
    }
  }
  ${PagePreviewFragment}
`
