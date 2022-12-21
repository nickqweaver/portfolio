import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import client from "../../apollo/client"
import {
  GetFeaturedProjectsQuery,
  GetProjectBySlugQuery,
} from "../../graphql/generated/schema-types"
import { GET_FEATURED_PROJECTS } from "../../graphql/queries/GetFeaturedProjects"
import { GET_PROJECT_BY_SLUG } from "../../graphql/queries/GetProjectBySlug"

interface IParams extends ParsedUrlQuery {
  slug: string
}

type ProjectProps = {
  title: string
  description: string
}

const Project = (props: ProjectProps) => {
  return (
    <div className="p-4 space-y-4 mt-16">
      <h1 className="text-primary-light text-4xl">{props.title}</h1>
      <p className="text-primary-light">{props.description}</p>
    </div>
  )
}

export default Project

export async function getStaticPaths() {
  // Have to fetch all the slugs dynamically create the routes at build time
  const featuredProjectQuery = await client.query<GetFeaturedProjectsQuery>({
    query: GET_FEATURED_PROJECTS,
  })

  return {
    paths: featuredProjectQuery.data.projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const q = await client.query<GetProjectBySlugQuery>({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug },
  })

  return {
    props: {
      title: q?.data?.project?.title,
      description: q?.data?.project?.description,
    },
  }
}
