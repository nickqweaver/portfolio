import type { NextPage } from "next"
import client from "../apollo/client"
import { GET_PAGE_PREVIEWS } from "../graphql/queries/GetIndexPagePreviews"
import {
  GetLayoutByRouteQuery,
  GetPagePreviewsQuery,
  LayoutFragmentFragment,
  PagePreviewFragmentFragment,
} from "../graphql/generated/schema-types"
import { GET_LAYOUT_BY_ROUTE } from "../graphql/queries/GetLayoutByRoute"
import { NestedLayout } from "../components/NestedLayout"
import React from "react"

type Props = {
  pagePreviews?: PagePreviewFragmentFragment[]
  layout?: LayoutFragmentFragment
}

const Home: NextPage = (props: Props) => {
  const { pagePreviews, layout } = props

  const Layout = (props: { children: React.ReactNode }) =>
    layout ? (
      <NestedLayout layout={layout}>{props.children}</NestedLayout>
    ) : (
      <>{props.children}</>
    )

  return (
    <Layout>
      <div>
        {pagePreviews?.map((preview) => {
          return (
            <div key={preview.slug}>
              <h1>{preview.title}</h1>
              {typeof preview.description?.html === "string" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: preview.description?.html,
                  }}
                ></div>
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const pageQuery = await client.query<GetPagePreviewsQuery>({
    query: GET_PAGE_PREVIEWS,
  })

  const layoutQuery = await client.query<GetLayoutByRouteQuery>({
    query: GET_LAYOUT_BY_ROUTE,
    variables: {
      route: "root",
    },
  })

  return {
    props: {
      pagePreviews: pageQuery.data.pagePreviews,
      layout: layoutQuery.data.layout,
    },
  }
}

export default Home
