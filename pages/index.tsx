import type { NextPage } from "next"
import client from "../apollo/client"
import {
  GetContactsQuery,
  GetContactsQueryResult,
} from "../graphql/generated/schema-types"
import { GET_CONTACTS } from "../graphql/queries/GetContacts"
import styles from "../styles/Home.module.css"
import { validateResponseType } from "../utils/validateResponseType"

type Props = {
  contacts?: GetContactsQuery["contacts"]
}
const Home: NextPage = (props: Props) => {
  console.log(props.contacts?.map((c) => c.email))
  return (
    <div className={styles.container}>
      {props.contacts?.map((c) => (
        <div key={c.email}>
          <div>{c.email}</div>
          <div>{c.github}</div>
          <div>{c.linkedIn}</div>
          <div>{c.phone}</div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await client.query({
    query: GET_CONTACTS,
  })

  if (validateResponseType<GetContactsQueryResult>(res)) {
    return {
      props: {
        contacts: res.data,
      },
    }
  }
}
export default Home
