import { gql } from "@apollo/client"

export const ProjectTileFragment = gql`
  fragment ProjectTile on Project {
    title
    completionDate
    description
    stack
    category
    slug
    id
    media {
      ...Media
    }
  }
`
