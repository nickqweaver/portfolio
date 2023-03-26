import { gql } from "@apollo/client"
import { MediaFragment } from "./MediaFragment"

export const ProjectFragment = gql`
  fragment Project on Project {
    title
    completionDate
    description {
      markdown
      text
    }
    stack
    category
    id
    slug
    media {
      ...Media
    }
  }
  ${MediaFragment}
`
