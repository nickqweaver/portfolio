import { gql } from "@apollo/client"
import { LayoutFragment } from "../fragments/LayoutFragment"

export const GET_LAYOUT_BY_ROUTE = gql`
  query GetLayoutByRoute($route: String!) {
    layout(where: { route: $route }) {
      ...LayoutFragment
    }
  }
  ${LayoutFragment}
`
