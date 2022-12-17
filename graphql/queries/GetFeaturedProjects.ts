import { gql } from "@apollo/client"
import { ProjectTileFragment } from "../fragments/ProjectTileFragment"

export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    projects(where: { isFeatured: true }) {
      ...ProjectTileFragment
    }
  }
  ${ProjectTileFragment}
`
