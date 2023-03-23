import { gql } from "@apollo/client"

export const IconFragment = gql`
  fragment Icon on Icon {
    name
    size
  }
`
