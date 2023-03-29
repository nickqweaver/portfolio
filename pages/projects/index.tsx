import client from "apollo/client"
import { ProjectCard } from "components/Projects/ProjectCard"
import {
  GetPaginatedProjectsQuery,
  ProjectFragment,
} from "graphql/generated/schema-types"
import { GET_PAGINATED_PROJECTS } from "graphql/queries/GetPaginatedProjects"
import { GetServerSideProps } from "next"

const Projects = (props: { projects: ProjectFragment[] }) => {
  const multiProj = [
    ...props.projects,
    ...props.projects,
    ...props.projects,
    ...props.projects,
  ]
  return (
    <div className="my-20 mx-4">
      <h1 className="text-primary-light text-5xl font-semibold my-8">
        Projects
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {multiProj.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
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
