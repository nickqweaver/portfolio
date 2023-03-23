import client from "apollo/client"
import { ProjectCard } from "components/Projects/ProjectCard"
import {
  GetPaginatedProjectsQuery,
  ProjectFragment,
} from "graphql/generated/schema-types"
import { GET_PAGINATED_PROJECTS } from "graphql/queries/GetPaginatedProjects"
import { GetServerSideProps } from "next"

const Projects = (props: { projects: ProjectFragment[] }) => {
  return (
    <div className="mt-[60px]">
      <h1 className="text-primary text-xl">Projects</h1>
      {props.projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />
      })}
    </div>
  )
}

export default Projects

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query
  const indexPageQuery = await client.query<GetPaginatedProjectsQuery>({
    query: GET_PAGINATED_PROJECTS,
    variables: {
      first: 10,
      after: page,
    },
  })
  const { data } = indexPageQuery

  return {
    props: {
      projects: data.projects,
    },
  }
}
