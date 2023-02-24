import { gql } from "@apollo/client"

export const ResumeFragment = gql`
  fragment ResumeFragment on Resume {
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
