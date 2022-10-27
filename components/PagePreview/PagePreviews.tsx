import { PagePreviewFragmentFragment } from "../../graphql/generated/schema-types"
import { PagePreviewCard } from "./PagePreviewCard"

export const PagePreviews = ({
  previews,
}: {
  previews: PagePreviewFragmentFragment[]
}) => {
  return (
    <div
      className="grid pt-20 px-12 bg-white"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(334px, 1fr))" }}
    >
      {previews.map((preview) => (
        <PagePreviewCard key={preview.slug} {...preview} />
      ))}
    </div>
  )
}
