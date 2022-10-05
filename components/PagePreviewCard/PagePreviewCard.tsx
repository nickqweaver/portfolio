import { PagePreviewFragmentFragment } from "../../graphql/generated/schema-types"
import { Button } from "../Button/Button"

export const PagePreviewCard = (props: PagePreviewFragmentFragment) => {
  return (
    <main className="bg-white">
      <div>{props.icon.name}</div>
      <h1 className="text-primary font-medium">{props.title}</h1>
      {props?.description?.html && (
        <p
          className="text-primary-light"
          dangerouslySetInnerHTML={{
            __html: props.description?.html,
          }}
        ></p>
      )}
      <Button title={props.title} />
    </main>
  )
}
