import { gql } from "@apollo/client"

export const Layout = gql`
  fragment Layout on Layout {
    route
    hero {
      backgroundColor {
        css
      }
      backgroundImage {
        id
        url
      }
      heading
      subHeading
      icon {
        ...Icon
      }
    }
  }
`
