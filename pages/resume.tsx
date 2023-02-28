import client from "apollo/client"
import {
  GetResumeQuery,
  ResumeFragmentFragment,
} from "graphql/generated/schema-types"
import { GET_RESUME } from "graphql/queries/GetResume"
import { GetStaticProps } from "next"
import { markdownParser } from "utils/markDownParser/parser"
import { MarkdownAST } from "utils/markDownParser/markdown"

const Resume = (props: ResumeFragmentFragment) => {
  markdownParser(props.description.markdown)
  const ast = new MarkdownAST(props.description.markdown).build()
  console.log(ast)
  return (
    <div className="text-primary mt-[60px]">
      <h1>{props.name}</h1>
      <p>{props.description.markdown}</p>
      <div>{props.title}</div>
      <div>{props.location}</div>
      <div>{props.phoneNumber}</div>
      <div>{props.email}</div>
      <section>
        {props.workExperience.map((experience, index) => (
          <div key={index}>{experience.markdown}</div>
        ))}
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const indexPageQuery = await client.query<GetResumeQuery>({
    query: GET_RESUME,
    variables: {
      route: "root",
    },
  })
  const {
    data: { resume },
  } = indexPageQuery

  if (resume?.description.markdown) markdownParser(resume?.description.markdown)

  return {
    props: {
      ...resume,
    },
  }
}
export default Resume
