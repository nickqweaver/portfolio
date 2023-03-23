import { gql } from "@apollo/client"

export const SocialFragment = gql`
  fragment Social on Social {
    id
    github
    twitter
    personal
    linkedIn
  }
`
