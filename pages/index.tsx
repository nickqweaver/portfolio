import type { NextPage } from "next"
import client from "../apollo/client"
import { Layout } from "../components/Layout"
import { GET_PAGE_PREVIEWS } from "../graphql/queries/GetPagePreviews"
import {
  GetPagePreviewsQuery,
  PagePreviewFragmentFragment,
} from "../graphql/generated/schema-types"
import styles from "../styles/Home.module.css"

type Props = {
  pagePreviews?: PagePreviewFragmentFragment[]
}

const Home: NextPage = (props: Props) => {
  return (
    <Layout>
      <div>
        {props.pagePreviews?.map((preview) => {
          return (
            <ul key={preview.slug}>
              <li>{preview.title}</li>
            </ul>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.query<GetPagePreviewsQuery>({
    query: GET_PAGE_PREVIEWS,
  })

  return { props: { pagePreviews: res.data.pages } }
}
export default Home
