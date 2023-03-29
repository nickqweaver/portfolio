import { gql } from "@apollo/client"
import { MediaFragment } from "./MediaFragment"

export const ProjectTileFragment = gql`
  fragment ProjectTile on Project {
    title
    completionDate
    slug
    id
    stack
    deployedUrl
    githubUrl
    description {
      markdown
      text
    }
    media {
      ...Media
    }
  }
  ${MediaFragment}
`
