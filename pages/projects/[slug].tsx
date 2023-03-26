import { Label } from "components/Label/Label"
import { Labels } from "components/Label/Labels"
import { GetStaticProps } from "next"
import Image from "next/image"
import { ProjectDescription, ProjectTileMarkdownFragment } from "pages"
import { ParsedUrlQuery } from "querystring"
import { MarkdownAST } from "utils/markDownParser/markdown"
import { renderMarkdownTree } from "utils/markDownParser/renderMarkdownTree"
import client from "../../apollo/client"
import {
  GetFeaturedProjectsQuery,
  GetProjectBySlugQuery,
  ProjectFragment,
} from "../../graphql/generated/schema-types"
import { GET_FEATURED_PROJECTS } from "../../graphql/queries/GetFeaturedProjects"
import { GET_PROJECT_BY_SLUG } from "../../graphql/queries/GetProjectBySlug"

interface IParams extends ParsedUrlQuery {
  slug: string
}

type ProjectMarkdownFragment = Omit<ProjectFragment, "description"> &
  ProjectDescription

const Project = (props: ProjectMarkdownFragment) => {
  return (
    <div className="p-4 space-y-4 mt-16 prose m-auto">
      <h1 className="text-primary-light text-4xl">{props.title}</h1>
      <Labels>
        {props.stack.map((stackOption) => (
          <Label key={stackOption} name={stackOption} />
        ))}
      </Labels>
      <div className="grid gap-6">
        {props.media.map((asset) => (
          <div
            key={asset.id}
            className="aspect-video h-[240px] relative w-[358px]"
          >
            <Image src={asset.media.url} alt={"Project Image"} layout="fill" />
          </div>
        ))}
      </div>

      {renderMarkdownTree(props.description.markdown)}
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
  const { data } = await client.query<GetProjectBySlugQuery>({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug },
  })

  const { project } = data

  if (project) {
    const { description, ...rest } = project
    return {
      props: {
        ...rest,
        description: {
          markdown: new MarkdownAST(project?.description.markdown).build(),
          text: project?.description.text,
        },
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}
