import { gql } from "@apollo/client"

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      ...Project
    }
  }
`
