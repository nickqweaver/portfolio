import { useRouter } from "next/router"
import client from "../../apollo/client"
import {
  GetFeaturedProjectsQuery,
  GetProjectBySlugQuery,
} from "../../graphql/generated/schema-types"
import { GET_FEATURED_PROJECTS } from "../../graphql/queries/GetFeaturedProjects"
import { GET_PROJECT_BY_SLUG } from "../../graphql/queries/GetProjectBySlug"

type ProjectProps = {
  title: string
  description: string
}

const Project = (props: ProjectProps) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>{props.description}</h1>
      <p>{props.title}</p>
    </div>
  )
}

export default Project

export async function getStaticProps({ params }) {
  const q = await client.query<GetProjectBySlugQuery>({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug: params.slug },
  })

  return {
    props: {
      title: q?.data?.project?.title,
      description: q?.data?.project?.description,
    },
  }
}
export async function getStaticPaths() {
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
