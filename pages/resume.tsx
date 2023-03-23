import client from "apollo/client"
import { Icon, IconNames } from "components/Icon"
import {
  GetResumeQuery,
  ResumeFragment,
  SocialFragment,
} from "graphql/generated/schema-types"
import { GET_RESUME } from "graphql/queries/GetResume"
import { useBreakPoint } from "hooks/useBreakpoint"
import { useWindow } from "hooks/useWindow"
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
  ResumeFragment,
  "description" | "workExperience" | "__typename"
> & {
  description: MarkdownObject[]
  workExperience: MarkdownObject[][]
} & Omit<SocialFragment, "__typename">

const renderMarkdownTree = (tree: MarkdownObject[]) => {
  // TODO - Only single styles are supported currently in the AST
  // Once this is changed we need to ensure all/multiple tailwind classNames get applied
  // based on the style type
  // Also need to apply the appropriate styles per element to match the Resume design

  const wrapTagsIfApplicable = (child: MarkdownChild) => {
    if (child.style === "BOLD") {
      return createElement("strong", undefined, child.text)
    }
    if (child.style === "ITALIC") {
      return createElement("em", undefined, child.text)
    }
    return child.text
  }

  const traverseNodes = (child: MarkdownChild): React.ReactNode | string => {
    if (child.jsxEl) {
      return createElement(
        child.jsxEl,
        undefined,
        child.children?.map((child) => traverseNodes(child))
      )
    }
    return wrapTagsIfApplicable(child)
  }

  return tree.map((node, index) => {
    return createElement(
      node.jsxEl,
      undefined,
      node.children.map(traverseNodes)
    )
  })
}

const Resume = (props: ResumeProps) => {
  const { width } = useWindow()

  const ResumeContactInfo = () => {
    const gridColStyles = "grid grid-rows-3 gap-3 sm:gap-2 justify-start"
    const contactLineStyle = "flex justify-start items-center"
    const textStyles =
      "grid ml-[4px] sm:ml-[6px] lg:ml-[8px] text-sm sm:text-lg lg:text-xl"
    const anchorStyles = `no-underline font-normal ${textStyles}`

    const smallBreakPoint = useBreakPoint("sm")
    const largeBreakPoint = useBreakPoint("lg")

    const iconSize =
      smallBreakPoint && largeBreakPoint
        ? width <= smallBreakPoint
          ? 16
          : width <= largeBreakPoint
          ? 18
          : 20
        : 16

    const isMobile = smallBreakPoint
      ? width <= smallBreakPoint
        ? true
        : false
      : false

    return (
      <section className="grid whitespace-nowrap gap-y-2 grid-cols-1 xs:grid-cols-2 items-center">
        <div className={gridColStyles}>
          <div className={contactLineStyle}>
            <Icon name={IconNames.Email} size={iconSize} />
            <span className={textStyles}>{props.email}</span>
          </div>
          <div className={contactLineStyle}>
            <Icon name={IconNames.Location} size={iconSize} />
            <span className={textStyles}>{props.location}</span>
          </div>
          <div className={contactLineStyle}>
            <Icon name={IconNames.Phone} size={iconSize} />
            <span className={textStyles}>{props.phoneNumber}</span>
          </div>
        </div>
        <div className={gridColStyles}>
          <div className={contactLineStyle}>
            <Icon name={IconNames.Github} size={iconSize} />
            <a href={props.github} className={anchorStyles}>
              Github
            </a>
          </div>
          <div className={contactLineStyle}>
            <Icon name={IconNames.LinkedIn} size={iconSize} />
            <a href={props.linkedIn} className={anchorStyles}>
              LinkedIn
            </a>
          </div>
          <div className={contactLineStyle}>
            <Icon name={IconNames.Web} size={iconSize} />
            <a href={props.personal ?? ""} className={anchorStyles}>
              {props.personal}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="mt-[92px] ">
      <article className="prose prose-em:text-sm sm:prose-em:text-base lg:prose-em:text-xl prose-h4:text-links prose-h1:text-primary prose-p:text-primary-light prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl m-auto">
        <h1>{props.name}</h1>
        <h3 className="text-links">{props.title}</h3>
        <ResumeContactInfo />
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
      data: { resume, social },
    } = indexPageQuery

    if (resume && social) {
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
          ...social,
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
