import { gql } from "@apollo/client"

export const ProjectTileFragment = gql`
  fragment ProjectTileFragment on Project {
    title
    completionDate
    description
    stack
    category
    slug
    id
    media {
      id
      order
      media {
        url
      }
    }
  }
`
