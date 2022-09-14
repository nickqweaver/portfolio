import type { NextPage } from "next"
import client from "../apollo/client"
import { Layout } from "../components/Layout"
import {
  GetContactsQuery,
  GetContactsQueryResult,
} from "../graphql/generated/schema-types"
import { validateResponseType } from "../utils/validateResponseType"
import { GET_CONTACTS } from "../graphql/queries/GetContacts"
import styles from "../styles/Home.module.css"

type Props = {
  contacts?: GetContactsQuery["contacts"]
}
const Home: NextPage = (props: Props) => {
  return (
    <Layout>
      <div className={styles.container}>
        {props.contacts?.map((c) => (
          <div key={c.email}>
            <div className="text-blue-light">{c.email}</div>
            <div>{c.github}</div>
            <div>{c.linkedIn}</div>
            <div>{c.phone}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.query({
    query: GET_CONTACTS,
  })

  if (validateResponseType<GetContactsQueryResult>(res)) {
    return {
      props: {
        contacts: res.data?.contacts,
      },
    }
  }
}
export default Home
