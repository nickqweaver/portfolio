import type { NextPage } from "next"
import client from "../apollo/client"
import { Layout } from "../components/Layout"
import { GET_INDEX_PAGE_PREVIEWS } from "../graphql/queries/GetIndexPagePreviews"
import {
  GetIndexPagePreviewsQuery,
  PagePreviewFragmentFragment,
} from "../graphql/generated/schema-types"
import styles from "../styles/Home.module.css"

type Props = {
  pagePreviews?: PagePreviewFragmentFragment[]
}

const Home: NextPage = (props: Props) => {
  const { pagePreviews } = props

  const navLinks = props.pagePreviews
    ?.filter((preview) => preview.isNavLink)
    .map((preview) => ({
      title: preview.title,
      slug: preview.slug,
    }))

  return (
    <Layout navigation={{ links: navLinks }}>
      <div></div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.query<GetIndexPagePreviewsQuery>({
    query: GET_INDEX_PAGE_PREVIEWS,
  })

  return { props: { pagePreviews: res.data.indexPages } }
}

export default Home
