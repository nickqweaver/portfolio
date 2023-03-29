import { Icon, IconNames } from "components/Icon"
import Modal from "components/Modal/Modal"
import { GET_PAGINATED_PROJECTS } from "graphql/queries/GetPaginatedProjects"
import { useWindow } from "hooks/useWindow"
import { GetStaticProps } from "next"
import Image from "next/image"
import { ProjectDescription } from "pages"
import { ParsedUrlQuery } from "querystring"
import { useState } from "react"
import { MarkdownAST } from "utils/markDownParser/markdown"
import { renderMarkdownTree } from "utils/markDownParser/renderMarkdownTree"
import client from "../../apollo/client"
import {
  GetPaginatedProjectsQuery,
  GetProjectBySlugQuery,
  ProjectFragment,
} from "../../graphql/generated/schema-types"
import { GET_PROJECT_BY_SLUG } from "../../graphql/queries/GetProjectBySlug"

interface IParams extends ParsedUrlQuery {
  slug: string
}

type ProjectMarkdownFragment = Omit<ProjectFragment, "description"> &
  ProjectDescription

const Project = (props: ProjectMarkdownFragment) => {
  const [containerImage, ...otherImages] = props.media
  const [activeImageIndex, setActiveImageIndex] = useState(-1)
  const { width } = useWindow()

  return (
    <div className="prose lg:prose-lg mt-20 mx-auto px-3">
      {activeImageIndex >= 0 && (
        <Modal onClose={() => setActiveImageIndex(-1)}>
          <div
            className={`aspect-video relative`}
            style={{ height: `${width / 2}px` }}
          >
            <Image
              src={props.media[activeImageIndex].media.url}
              alt="Project image in Viewer"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Modal>
      )}
      <h1>{props.title}</h1>
      <div className="flex flex-wrap gap-2">
        {props.stack.map((stackOption) => (
          <span
            key={stackOption}
            className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-lg"
          >
            {stackOption}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <div
          className="relative aspect-video h-[204px] sm:h-[350px] lg:h-[400px] cursor-pointer"
          onClick={() => setActiveImageIndex(0)}
        >
          <Image
            src={containerImage.media.url}
            alt="Project main image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-wrap gap-8 mt-8">
          {otherImages.map((asset, index) => (
            <div
              key={asset.id}
              className="relative aspect-video h-[92px] sm:h-[124px] lg:h-[136px] cursor-pointer"
              onClick={() => setActiveImageIndex(index + 1)}
            >
              <Image
                src={asset.media.url}
                alt={"Project Image"}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
      <h2>Overview</h2>
      {renderMarkdownTree(props.description.markdown)}
    </div>
  )
}

export default Project

export async function getStaticPaths() {
  // Have to fetch all the slugs dynamically create the routes at build time
  // This seems problematic considering we can't fetch all of them at once...
  // TODO -> Look into this
  const projectsQuery = await client.query<GetPaginatedProjectsQuery>({
    query: GET_PAGINATED_PROJECTS,
    variables: {
      first: 20,
    },
  })

  return {
    paths: projectsQuery.data.projects.map((project) => ({
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
