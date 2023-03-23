import { gql } from "@apollo/client"

export const GET_RESUME = gql`
  query GetResume {
    resume(where: { id: "cleiz8guqj48j0aiwrrmvcm1z" }) {
      ...Resume
    }
    social(where: { id: "clfkjiin40ji90bise14awe6j" }) {
      ...Social
    }
  }
`
