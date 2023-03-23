import { gql } from "@apollo/client"

export const ResumeFragment = gql`
  fragment Resume on Resume {
    name
    title
    description {
      markdown
    }
    phoneNumber
    email
    location
    workExperience {
      markdown
    }
  }
`
