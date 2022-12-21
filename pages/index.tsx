import type { GetStaticProps, NextPage } from "next"
import client from "../apollo/client"
import { GET_PAGE_PREVIEWS } from "../graphql/queries/GetIndexPagePreviews"
import {
  GetFeaturedProjectsQuery,
  GetLayoutByRouteQuery,
  GetPagePreviewsQuery,
  LayoutFragmentFragment,
  PagePreviewFragmentFragment,
  ProjectTileFragmentFragment,
} from "../graphql/generated/schema-types"
import { GET_LAYOUT_BY_ROUTE } from "../graphql/queries/GetLayoutByRoute"
import { NestedLayout } from "../components/NestedLayout"
import React from "react"
import { PagePreviews } from "../components/PagePreview/PagePreviews"
import { GET_FEATURED_PROJECTS } from "../graphql/queries/GetFeaturedProjects"
import { ProjectCard } from "../components/ProjectCard"
import { CardTileSection } from "../components/CardTileSection"

type Props = {
  pagePreviews?: PagePreviewFragmentFragment[]
  layout?: LayoutFragmentFragment
  featuredProjects?: ProjectTileFragmentFragment[]
}

// How to implement dark mode with tailwind?

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
              <>
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
              </>
            )
          })}
        </CardTileSection>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageQuery = await client.query<GetPagePreviewsQuery>({
    query: GET_PAGE_PREVIEWS,
  })

  const layoutQuery = await client.query<GetLayoutByRouteQuery>({
    query: GET_LAYOUT_BY_ROUTE,
    variables: {
      route: "root",
    },
  })

  const featuredProjectQuery = await client.query<GetFeaturedProjectsQuery>({
    query: GET_FEATURED_PROJECTS,
  })

  return {
    props: {
      pagePreviews: pageQuery.data.pagePreviews,
      layout: layoutQuery.data.layout,
      featuredProjects: featuredProjectQuery.data.projects,
    },
  }
}

export default Home
