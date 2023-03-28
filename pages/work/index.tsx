import client from "apollo/client"
import {
  GetPaginatedWorkQuery,
  ProjectTileFragment,
} from "graphql/generated/schema-types"
import { GetServerSideProps } from "next"
import { GET_PAGINATED_WORK } from "graphql/queries/GetPaginatedWork"
import { WorkCard } from "components/WorkCard"
import { MarkdownAST } from "utils/markDownParser/markdown"
import { ProjectTileMarkdownFragment } from "pages"

const Work = (props: { work: ProjectTileMarkdownFragment[] }) => {
  return (
    <div className="grid-cols-2 gap-12 mt-16">
      {props.work.map((work) => (
        <WorkCard key={work.id} {...work} />
      ))}
    </div>
  )
}

export default Work

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query
  const { data } = await client.query<GetPaginatedWorkQuery>({
    query: GET_PAGINATED_WORK,
    variables: {
      first: 10,
      after: page,
    },
  })

  return {
    props: {
      work: [
        ...data.projects.map((project) => ({
          ...project,
          description: {
            markdown: new MarkdownAST(project.description.markdown).build(),
            text: project.description.text,
          },
        })),
      ],
    },
  }
}
