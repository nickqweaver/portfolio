import { PagePreviewFragmentFragment } from "../../graphql/generated/schema-types"
import { PagePreviewCard } from "./PagePreviewCard"

export const PagePreviews = ({
  previews,
}: {
  previews: PagePreviewFragmentFragment[]
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {previews.map((preview) => (
        <PagePreviewCard key={preview.slug} {...preview} />
      ))}
    </div>
  )
}
