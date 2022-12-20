import { gql } from "@apollo/client"
import { MediaFragment } from "./MediaFragment"

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
      ...MediaFragment
    }
  }
  ${MediaFragment}
`
