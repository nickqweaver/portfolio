import { gql } from "@apollo/client"
import { LayoutFragment } from "graphql/fragments/LayoutFragment"
import { PagePreviewFragment } from "graphql/fragments/PagePreviewFragment"
import { ProjectTileFragment } from "graphql/fragments/ProjectTileFragment"

export const GET_INDEX_PAGE = gql`
  query GetIndexPage($route: String!) {
    projects(where: { isFeatured: true, type: WORK }) {
      ...ProjectTile
    }
    layout(where: { route: $route }) {
      ...Layout
    }
    pagePreviews {
      ...PagePreview
    }
  }
  ${ProjectTileFragment}
  ${LayoutFragment}
  ${PagePreviewFragment}
`
