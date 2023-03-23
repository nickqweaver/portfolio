import { gql } from "@apollo/client"
import { ResumeFragment } from "graphql/fragments/ResumeFragment"
import { SocialFragment } from "graphql/fragments/SocialFragment"

export const GET_RESUME = gql`
  query GetResume {
    resume(where: { id: "cleiz8guqj48j0aiwrrmvcm1z" }) {
      ...Resume
    }
    social(where: { id: "clfkjiin40ji90bise14awe6j" }) {
      ...Social
    }
  }
  ${ResumeFragment}
  ${SocialFragment}
`
