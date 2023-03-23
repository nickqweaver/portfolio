import type { GetStaticProps, NextPage } from "next"
import client from "../apollo/client"
import {
  GetIndexPageQuery,
  LayoutFragment,
  PagePreviewFragment,
  ProjectTileFragment,
} from "../graphql/generated/schema-types"
import { NestedLayout } from "../components/NestedLayout"
import React from "react"
import { PagePreviews } from "../components/PagePreview/PagePreviews"
import { WorkCard } from "../components/WorkCard"
import { CardTileSection } from "../components/CardTileSection"
import { GET_INDEX_PAGE } from "../graphql/queries/GetIndexPage"

type Props = {
  pagePreviews?: PagePreviewFragment[]
  layout?: LayoutFragment
  featuredProjects?: ProjectTileFragment[]
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
          {/** TODO Query Work here not projects -> filter 5 lateset or featured?*/}
          {featuredProjects?.map((project) => {
            return (
              <div
                key={project.id}
                className="grid"
                style={{
                  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
                }}
              >
                <WorkCard {...project} slug={`projects/${project.slug}`} />
              </div>
            )
          })}
          <WorkCard {...({} as any)} slug={`projects/dll`} />
          <WorkCard {...({} as any)} slug={`projects/dll`} />
          <WorkCard {...({} as any)} slug={`projects/dll`} />
          <WorkCard {...({} as any)} slug={`projects/dll`} />
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
