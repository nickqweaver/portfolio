import { gql } from "@apollo/client"
import { LayoutFragment } from "graphql/fragments/LayoutFragment"

export const GET_LAYOUT_BY_ROUTE = gql`
  query GetLayoutByRoute($route: String!) {
    layout(where: { route: $route }) {
      ...Layout
    }
  }
  ${LayoutFragment}
`
