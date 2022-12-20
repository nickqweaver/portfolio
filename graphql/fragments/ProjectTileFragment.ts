import { gql } from "@apollo/client"
import { MediaFragment } from "./MediaFragment"

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
      ...MediaFragment
    }
  }
  ${MediaFragment}
`
