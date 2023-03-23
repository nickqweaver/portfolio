import { gql } from "@apollo/client"

export const GET_LAYOUT_BY_ROUTE = gql`
  query GetLayoutByRoute($route: String!) {
    layout(where: { route: $route }) {
      ...Layout
    }
  }
`
