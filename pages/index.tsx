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
import { MarkdownAST, MarkdownObject } from "utils/markDownParser/markdown"

export type ProjectDescription = {
  description: { markdown: MarkdownObject[]; text: string }
}

export type ProjectTileMarkdownFragment = Omit<
  ProjectTileFragment,
  "description"
> &
  ProjectDescription

type Props = {
  pagePreviews?: PagePreviewFragment[]
  layout?: LayoutFragment
  featuredProjects?: ProjectTileMarkdownFragment[]
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
      <main className="py-20 px-0 space-y-10">
        {pagePreviews && <PagePreviews previews={pagePreviews} />}
        <CardTileSection
          link={{ href: "work", title: "See More" }}
          title="Recent Work"
        >
          {/** TODO Query Work here not projects -> filter 5 lateset or featured?*/}
          {featuredProjects?.map((project) => {
            return (
              <div
                key={project.id}
                className="grid gap-8"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                }}
              >
                <WorkCard {...project} slug={`projects/${project.slug}`} />
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
      featuredProjects: data.projects.map((project) => ({
        ...project,
        description: {
          markdown: new MarkdownAST(project.description.markdown).build(),
          text: project.description.text,
        },
      })),
    },
  }
}

export default Home
