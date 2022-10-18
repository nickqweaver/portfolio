import Link from "next/link"
import { PagePreviewFragmentFragment } from "../../graphql/generated/schema-types"
import { Button } from "../Button/Button"
import { Icon } from "../Icon"

export const PagePreviewCard = (props: PagePreviewFragmentFragment) => {
  const { icon, description, title } = props
  return (
    <main className="bg-white grid gap-5 p-5">
      <Icon name={icon.name} className="stroke-blue-light w-10 h-10" />
      <h1 className="text-primary font-medium text-xl">{title}</h1>
      {description?.html && (
        <p
          className="text-primary-light text-base"
          dangerouslySetInnerHTML={{
            __html: description?.html,
          }}
        ></p>
      )}
      <Button title={props.title} href={props.slug} />
    </main>
  )
}
