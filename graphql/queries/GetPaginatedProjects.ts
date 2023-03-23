import { gql } from "@apollo/client"

export const GET_PAGINATED_PROJECTS = gql`
  query GetPaginatedProjects($first: Int!, $after: String) {
    projects(first: $first, after: $after) {
      ...Project
    }
  }
`
