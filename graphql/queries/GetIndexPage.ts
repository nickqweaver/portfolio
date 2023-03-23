import { gql } from "@apollo/client"

export const GET_INDEX_PAGE = gql`
  query GetIndexPage($route: String!) {
    projects(where: { isFeatured: true }) {
      ...ProjectTile
    }
    layout(where: { route: $route }) {
      ...Layout
    }
    pagePreviews {
      ...PagePreview
    }
  }
`
