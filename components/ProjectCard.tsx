import Image from "next/image"
import { MediaFragmentFragment } from "../graphql/generated/schema-types"

type ProjectCardProps = {
  media?: MediaFragmentFragment[]
  title: string
}
export const ProjectCard = (props: ProjectCardProps) => {
  const { media, title } = props
  return (
    <div className="rounded-lg grid overflow-hidden shadow-lg">
      <div className="relative w-full h-[232px]">
        {media?.map((asset) => (
          <Image
            src={asset.media.url}
            alt={title}
            key={asset.id}
            layout="fill"
          />
        ))}
      </div>
      <div className="bg-sheet flex items-center">
        <h6 className="text-primary-light text-sm font-semibold bg-inherit bg-sheet flex p-3">
          {title}
        </h6>
      </div>
    </div>
  )
}
