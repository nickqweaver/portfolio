import { gql } from "@apollo/client"

export const ProjectFragment = gql`
  fragment ProjectFragment on Project {
    title
    completionDate
    description
    stack
    category
    id
    slug
    media {
      id
      order
      media {
        url
      }
    }
  }
`
