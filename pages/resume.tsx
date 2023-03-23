import client from "apollo/client"
import {
  GetResumeQuery,
  ResumeFragment,
  SocialFragment,
} from "graphql/generated/schema-types"
import { GET_RESUME } from "graphql/queries/GetResume"
import { GetStaticProps } from "next"
import { createElement } from "react"
import { MarkdownAST, MarkdownObject } from "utils/markDownParser/markdown"
import { MarkdownChild } from "utils/markDownParser/markdownChild"

/**
 * TODO:
 * 2. Apply styles if applicable
 * 3. Ensure line breaks are acting correctly
 * 4. Render correct elements per MD element (EG -> Bulleted List, Numbered List, List Items, P tags, etc...)
 */
type ResumeProps = Omit<ResumeFragment, "description" | "workExperience"> & {
  description: MarkdownObject[]
  workExperience: MarkdownObject[][]
} & SocialFragment

const renderMarkdownTree = (tree: MarkdownObject[]) => {
  // TODO - Only single styles are supported currently in the AST
  // Once this is changed we need to ensure all/multiple tailwind classNames get applied
  // based on the style type
  // Also need to apply the appropriate styles per element to match the Resume design
  const getClassNames = (node: MarkdownChild) => {
    if (node.style === "NONE" || !node.style) {
      return
    }

    return node.style === "BOLD" ? "font-bold" : "italic"
  }

  const traverseNodes = (child: MarkdownChild): React.ReactNode | string => {
    if (child.jsxEl) {
      return createElement(
        child.jsxEl,
        getClassNames(child),
        child.children?.map((child) => traverseNodes(child))
      )
    }
    return child.text
  }

  return tree.map((node, index) => {
    return createElement(
      node.jsxEl,
      { className: `${getClassNames(node)}, text-primary`, key: index },
      node.children.map(traverseNodes)
    )
  })
}

const Resume = (props: ResumeProps) => {
  console.log(props.email, props.location, props.phoneNumber, props.title)
  return (
    <main className="mt-[92px] ">
      <article className="prose m-auto">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <section className="grid">
          <span>{props.email}</span>
          <span>{props.location}</span>
          <span>{props.phoneNumber}</span>
          <span></span>
          <span></span>
        </section>
        {renderMarkdownTree(props.description)}
        <h2>Work Experience</h2>
        {props.workExperience.map(renderMarkdownTree)}
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps<ResumeProps> = async () => {
  const indexPageQuery = await client.query<GetResumeQuery>({
    query: GET_RESUME,
    variables: {
      route: "root",
    },
  })

  try {
    const {
      data: { resume },
    } = indexPageQuery

    if (resume) {
      const {
        description: resumeDescription,
        workExperience: resumeWorkExperience,
        ...rest
      } = resume
      const description = new MarkdownAST(resumeDescription.markdown).build()
      const workExperience = resumeWorkExperience.map((experience) =>
        new MarkdownAST(experience.markdown).build()
      )
      return {
        props: {
          description,
          workExperience,
          ...rest,
        },
      }
    } else {
      console.log("Successful request returned no resume data!")
      return {
        notFound: true,
      }
    }
  } catch (err) {
    console.log("There was an error fetching resume data...", err)
    return {
      notFound: true,
    }
  }
}
export default Resume
