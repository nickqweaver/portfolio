import { gql } from "@apollo/client"
import { ResumeFragment } from "graphql/fragments/ResumeFragment"

export const GET_RESUME = gql`
  query GetResume {
    resume(where: { id: "cleiz8guqj48j0aiwrrmvcm1z" }) {
      ...Resume
    }
  }
  ${ResumeFragment}
`
