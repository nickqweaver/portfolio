import type { GetStaticProps, NextPage } from "next"
import client from "../apollo/client"
import { GET_PAGE_PREVIEWS } from "../graphql/queries/GetPagePreviews"
import {
  GetIndexPageQuery,
  LayoutFragmentFragment,
  PagePreviewFragmentFragment,
  ProjectTileFragmentFragment,
} from "../graphql/generated/schema-types"
import { NestedLayout } from "../components/NestedLayout"
import React from "react"
import { PagePreviews } from "../components/PagePreview/PagePreviews"
import { ProjectCard } from "../components/ProjectCard"
import { CardTileSection } from "../components/CardTileSection"
import { GET_INDEX_PAGE } from "../graphql/queries/GetIndexPage"

type Props = {
  pagePreviews?: PagePreviewFragmentFragment[]
  layout?: LayoutFragmentFragment
  featuredProjects?: ProjectTileFragmentFragment[]
}

// TODO's
/**
 * 1. Dark Mode
 * 2. Add Request Logging
 * 3. Swap out Apollo for React Query
 * 4. Upgrade to Next 13
 *
 * @param props
 * @returns
 */

const Home: NextPage = (props: Props) => {
  const { pagePreviews, layout, featuredProjects } = props

  const Layout = (props: { children: React.ReactNode }) =>
    layout ? (
      <NestedLayout layout={layout}>{props.children}</NestedLayout>
    ) : (
      <>{props.children}</>
    )

  return (
    <Layout>
      <main className="py-20 px-6 sm:px-12 space-y-10">
        {pagePreviews && <PagePreviews previews={pagePreviews} />}
        <CardTileSection
          link={{ href: "projects", title: "See More" }}
          title="Recent Work"
        >
          {featuredProjects?.map((project) => {
            return (
              <div key={project.id}>
                {/**TODO REMOVE after additional projects added */}
                {/** TODO Remove Repeats after additional projects added in hygraph */}
                {project.media && project.title && (
                  <>
                    <ProjectCard
                      {...project}
                      slug={`projects/${project.slug}`}
                    />
                    <ProjectCard
                      {...project}
                      slug={`projects/${project.slug}`}
                      key={project.id}
                    />
                    <ProjectCard
                      {...project}
                      slug={`projects/${project.slug}`}
                      key={project.id}
                    />
                    <ProjectCard
                      {...project}
                      slug={`projects/${project.slug}`}
                      key={project.id}
                    />
                  </>
                )}
              </div>
            )
          })}
        </CardTileSection>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const indexPageQuery = await client.query<GetIndexPageQuery>({
    query: GET_INDEX_PAGE,
    variables: {
      route: "root",
    },
  })
  const { data } = indexPageQuery

  return {
    props: {
      pagePreviews: data.pagePreviews,
      layout: data.layout,
      featuredProjects: data.projects,
    },
  }
}

export default Home
