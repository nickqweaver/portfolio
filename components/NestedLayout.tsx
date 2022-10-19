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
          className={`w-screen h-[800px] flex justify-center flex-col items-center bg-no-repeat bg-cover bg-center bg-fixed`}
          style={{
            backgroundImage: `url(${layout.hero.backgroundImage?.url})`,
          }}
        >
          <h1 className="text-8xl font-extrabold mb-[32px]">
            {layout.hero.heading}
          </h1>
          <h2 className="font-semibold text-4xl">{layout.hero.subHeading}</h2>
        </div>
      )}
      {children}
    </main>
  )
}
