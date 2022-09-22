import React from "react"
import { LayoutFragmentFragment } from "../graphql/generated/schema-types"

export const NestedLayout = ({
  children,
  layout,
}: {
  children: React.ReactNode
  layout: LayoutFragmentFragment
}) => {
  return (
    <main>
      {layout.hero && (
        <div
          style={{
            backgroundColor: layout.hero.backgroundColor?.css,
            width: "100vw",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>{layout.hero.heading}</h1>
          <h1>{layout.hero.subHeading}</h1>
        </div>
      )}
      {children}
    </main>
  )
}
