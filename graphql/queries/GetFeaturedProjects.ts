import { gql } from "@apollo/client"

export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    projects(where: { isFeatured: true }) {
      ...ProjectTile
    }
  }
`
