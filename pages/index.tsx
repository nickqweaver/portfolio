import type { NextPage } from "next"
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
import Image from "next/image"
import Link from "next/link"

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
      {pagePreviews && <PagePreviews previews={pagePreviews} />}
      <div>
        {featuredProjects?.map((project) => {
          return (
            <Link key={project.id} href={`projects/${project.slug}`}>
              <div
                style={{
                  width: "400px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  flexDirection: "column",
                  color: "#000",
                  border: "2px solid blue",
                }}
              >
                <span>{project.title}</span>
                <span>{project.description?.substring(0, 30)}</span>
                {project.media.map((asset) => (
                  <Image
                    src={asset.media.url}
                    key={asset.id}
                    alt={asset.id}
                    width="300px"
                    height="200px"
                    layout="fixed"
                  />
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  // Combined Queries
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
