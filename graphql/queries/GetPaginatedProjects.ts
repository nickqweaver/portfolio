import { gql } from "@apollo/client"
import { ProjectFragment } from "graphql/fragments/ProjectFragment"

export const GET_PAGINATED_PROJECTS = gql`
  query GetPaginatedProjects($first: Int!, $after: String) {
    projects(first: $first, after: $after, where: { type: WORK }) {
      ...Project
    }
  }
  ${ProjectFragment}
`
