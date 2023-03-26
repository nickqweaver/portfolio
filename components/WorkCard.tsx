import Image from "next/image"
import Link from "next/link"
/** TODO Swap this out with work fragments */
import { ProjectTileFragment } from "graphql/generated/schema-types"
import { Button } from "./Button/Button"

export const WorkCard = (props: ProjectTileFragment) => {
  const { media, title, completionDate, description } = props
  console.log(props)

  const truncateStr = (str: string) => {
    return `${str.slice(0, 125)}...`
  }
  return (
    <Link href={`/${props.slug}`}>
      <div className="rounded-xl grid overflow-hidden shadow-md bg-white">
        <div className="relative w-full grid grid-rows-2  sm:grid-rows-1 sm:grid-cols-2 ">
          <div className="py-8 flex flex-col justify-center items-center">
            <span className="text-blue font-semibold text-sm text-start">
              Company
            </span>
            <h4 className="text-primary font-bold text-2xl">{title}</h4>
            <span className="text-primary-light text-xs italic mt-2">
              <strong className="text-blue">Completed: </strong>
              {completionDate}
            </span>
            <p className="prose mt-[32px] mx-[16px] sm:mx-[24px] mb-[16px] text-gray-500">
              {truncateStr(description)}
            </p>
            <Button title="View More" type="primary" />
          </div>
          <div className="flex justify-center items-center py-4 px-2">
            <div className="relative aspect-video h-[190px] rounded-md overflow-hidden">
              {media?.map((asset) => (
                <Image
                  key={asset.id}
                  src={asset.media.url}
                  alt={title ?? "No description found"}
                  layout="fill"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
