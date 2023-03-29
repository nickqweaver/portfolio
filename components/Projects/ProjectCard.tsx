import Image from "next/image"
import { ProjectTileFragment } from "graphql/generated/schema-types"
import { Pill } from "./Pill"
import { Button } from "components/Button/Button"
import { Icon, IconNames } from "components/Icon"

export const ProjectCard = (props: ProjectTileFragment) => {
  const { media, title, stack, githubUrl, deployedUrl } = props
  const [mainImage] = media
  return (
    <div className="grid w-[286px] rounded-lg overflow-hidden shadow-md ">
      {/**  Image  */}
      <div className="relative w-full h-[152px]">
        {mainImage.media.url && (
          <Image
            src={mainImage.media.url}
            alt={title ?? "No description found"}
            key={mainImage.id}
            layout="fill"
          />
        )}
      </div>
      {/** Title/Stack */}
      <div className="flex items-center flex-col pt-2 text-primary font-bold">
        {title}
      </div>
      <div className="flex flex-wrap gap-1 justify-center py-4 px-2">
        {stack.map((option) => (
          <Pill key={option} name={option} />
        ))}
      </div>
      <div className="pt-6 pb-6 flex justify-between items-center px-7">
        {deployedUrl ? (
          <a href={`https://${deployedUrl}`} target="_blank" rel="noreferrer">
            <Icon
              name={IconNames.Link}
              className={"stroke-grey cursor-pointer"}
              href={deployedUrl}
            />
          </a>
        ) : (
          <span></span>
        )}
        <Button
          href={`projects/${props.slug}`}
          title="View Details"
          type="primary"
        />
        {githubUrl ? (
          <a href={`https://${githubUrl}`} target="_blank" rel="noreferrer">
            <Icon
              name={IconNames.Github}
              className={"stroke-grey cursor-pointer"}
            />
          </a>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  )
}
