import client from "apollo/client"
import {
  GetResumeQuery,
  ResumeFragmentFragment,
} from "graphql/generated/schema-types"
import { GET_RESUME } from "graphql/queries/GetResume"
import { GetStaticProps } from "next"
import { MarkdownAST, MarkdownObject } from "utils/markDownParser/markdown"

/**
 * TODO:
 * 1. Render the Tree recursively
 * 2. Apply styles if applicable
 * 3. Ensure line breaks are acting correctly
 * 4. Render correct elements per MD element (EG -> Bulleted List, Numbered List, List Items, P tags, etc...)
 */
const Resume = (props: ResumeFragmentFragment) => {
  const description = new MarkdownAST(props.description.markdown).build()

  const renderMD = (markdown: MarkdownObject[]) => {
    return markdown.map((markdown, index) => {
      return (
        <div
          key={`${(markdown.type, index)}`}
          id={`MD TYPE: ${markdown.type}`}
          className="text-primary mt-[32px]"
        >
          {markdown.children.map((child, index) => {
            return (
              <div key={index}>
                {child.text}
                {child.children?.map((child, index) => (
                  <div key={index}>{child.text}</div>
                ))}
              </div>
            )
          })}
        </div>
      )
    })
  }
  return (
    <div className="mt-[92px]">
      <div>{renderMD(description)}</div>
      <div>
        {props.workExperience.map((work) => {
          return renderMD(new MarkdownAST(work.markdown).build())
        })}
      </div>
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

  return {
    props: {
      ...resume,
    },
  }
}
export default Resume
