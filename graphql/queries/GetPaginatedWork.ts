import { gql } from "@apollo/client"
import { ProjectFragment } from "graphql/fragments/ProjectFragment"

export const GET_PAGINATED_WORK = gql`
  query GetPaginatedWork($first: Int!, $after: String) {
    projects(first: $first, after: $after, where: { type: WORK }) {
      ...Project
    }
  }
  ${ProjectFragment}
`
