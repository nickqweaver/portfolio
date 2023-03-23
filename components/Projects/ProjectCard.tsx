import Image from "next/image"
import Link from "next/link"
import { ProjectTileFragment } from "graphql/generated/schema-types"

export const ProjectCard = (props: ProjectTileFragment) => {
  const { media, title } = props
  return (
    <Link href={`/${props.slug}`}>
      <div className="rounded-lg grid overflow-hidden shadow-lg">
        <div className="relative w-full h-[232px]">
          {media?.map((asset) => (
            <Image
              src={asset.media.url}
              alt={title ?? "No description found"}
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
    </Link>
  )
}
