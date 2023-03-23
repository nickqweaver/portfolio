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

type ResumeProps = Omit<
  ResumeFragment,
  "description" | "workExperience" | "__typename" | "education"
> & {
  description: MarkdownObject[]
  workExperience: MarkdownObject[][]
  education?: MarkdownObject[]
} & Omit<SocialFragment, "__typename">

const renderMarkdownTree = (tree: MarkdownObject[]) => {
  // TODO - Only single styles are supported currently in the AST
  // Once this is changed we need to ensure all/multiple tailwind classNames get applied
  // based on the style type

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
  const smallBreakPoint = useBreakPoint("sm")
  const mediumBreakPoint = useBreakPoint("md")
  const largeBreakPoint = useBreakPoint("lg")

  const mapBreakPointStyle = (
    xs: string,
    sm: string,
    md: string,
    lg: string
  ) => {
    if (smallBreakPoint && largeBreakPoint && mediumBreakPoint) {
      return width <= smallBreakPoint
        ? xs
        : width <= mediumBreakPoint
        ? sm
        : width <= largeBreakPoint
        ? md
        : lg
    }

    return sm
  }

  const ResumeContactInfo = () => {
    const gridColStyles = "grid grid-rows-3 gap-3 sm:gap-2 justify-start"
    const contactLineStyle = "flex justify-start items-center"
    const textStyles =
      "grid ml-[4px] sm:ml-[6px] lg:ml-[8px] text-sm sm:text-lg lg:text-xl"
    const anchorStyles = `no-underline font-normal ${textStyles}`

    const iconSize =
      smallBreakPoint && largeBreakPoint
        ? width <= smallBreakPoint
          ? 16
          : width <= largeBreakPoint
          ? 18
          : 20
        : 16

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
            <a href={`https://www.${props.github}`} className={anchorStyles}>
              Github
            </a>
          </div>
          <div className={contactLineStyle}>
            <Icon name={IconNames.LinkedIn} size={iconSize} />
            <a href={`https://www.${props.linkedIn}`} className={anchorStyles}>
              LinkedIn
            </a>
          </div>
          {props.personal && (
            <div className={contactLineStyle}>
              <Icon name={IconNames.Web} size={iconSize} />
              <a href={`https://${props.personal}`} className={anchorStyles}>
                {props.personal}
              </a>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <main className="mt-[92px] mx-2">
      <article className="prose prose-em:text-sm sm:prose-em:text-base lg:prose-em:text-xl prose-h4:text-links prose-h1:text-primary prose-p:text-primary-light prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl m-auto">
        <h1>{props.name}</h1>
        <h3 className="text-links">{props.title}</h3>
        <ResumeContactInfo />
        <div
          className="grid gap-2 my-10 "
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${mapBreakPointStyle(
              "64px",
              "84px",
              "96px",
              "120px"
            )}, 1fr))`,
          }}
        >
          {props.skills.map((skill) => (
            <div
              key={skill}
              className="flex justify-center items-center text-links text-[10px] sm:text-xs md:text-sm py-1 px-2 font-semibold border-2 border-light-blue rounded-2xl"
            >
              {skill}
            </div>
          ))}
        </div>
        {renderMarkdownTree(props.description)}
        <h2>Work Experience</h2>
        {props.workExperience.map(renderMarkdownTree)}
        {props.education && (
          <>
            <h2>Education</h2>
            {renderMarkdownTree(props?.education)}
          </>
        )}
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
        education: resumeEducation,
        ...rest
      } = resume
      const description = new MarkdownAST(resumeDescription.markdown).build()
      const workExperience = resumeWorkExperience.map((experience) =>
        new MarkdownAST(experience.markdown).build()
      )
      const education = resumeEducation
        ? new MarkdownAST(resumeEducation?.markdown).build()
        : undefined
      return {
        props: {
          ...social,
          description,
          workExperience,
          education,
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
