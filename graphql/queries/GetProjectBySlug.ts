import { gql } from "@apollo/client"
import { ProjectFragment } from "../fragments/ProjectFragment"

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      ...ProjectFragment
    }
  }
  ${ProjectFragment}
`
