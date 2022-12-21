import { gql } from "@apollo/client"
import { LayoutFragment } from "../fragments/LayoutFragment"
import { PagePreviewFragment } from "../fragments/PagePreviewFragment"
import { ProjectTileFragment } from "../fragments/ProjectTileFragment"

export const GET_INDEX_PAGE = gql`
  query GetIndexPage($route: String!) {
    projects(where: { isFeatured: true }) {
      ...ProjectTileFragment
    }
    layout(where: { route: $route }) {
      ...LayoutFragment
    }
    pagePreviews {
      ...PagePreviewFragment
    }
  }
  ${ProjectTileFragment}
  ${LayoutFragment}
  ${PagePreviewFragment}
`
