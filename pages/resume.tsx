import client from "apollo/client"
import {
  GetResumeQuery,
  ResumeFragmentFragment,
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
type ResumeProps = Omit<
  ResumeFragmentFragment,
  "description" | "workExperience"
> & {
  description: MarkdownObject[]
  workExperience: MarkdownObject[][]
}

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

  return tree.map((node) => {
    return createElement(
      node.jsxEl,
      { className: `${getClassNames(node)}, text-primary` },
      node.children.map(traverseNodes)
    )
  })
}

const Resume = (props: ResumeProps) => {
  return (
    <main className="mt-[92px] ">
      <article className="prose md:prose-sm lg:prose-xl m-auto">
        <h1>{props.name}</h1>
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
