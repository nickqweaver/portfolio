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
    githubUrl
    deployedUrl
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
