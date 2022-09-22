import { gql } from "@apollo/client"

export const IconFragment = gql`
  fragment IconFragment on Icon {
    name
    size
  }
`
