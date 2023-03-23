import { gql } from "@apollo/client"

export const ProjectFragment = gql`
  fragment Project on Project {
    title
    completionDate
    description
    stack
    category
    id
    slug
    media {
      ...Media
    }
  }
`
