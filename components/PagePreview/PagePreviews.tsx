import { PagePreviewFragment } from "../../graphql/generated/schema-types"
import { PagePreviewCard } from "./PagePreviewCard"

export const PagePreviews = ({
  previews,
}: {
  previews: PagePreviewFragment[]
}) => {
  return (
    <div
      className="grid bg-white"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(334px, 1fr))" }}
    >
      {previews.map((preview) => (
        <PagePreviewCard key={preview.slug} {...preview} />
      ))}
    </div>
  )
}
