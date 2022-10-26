import React from "react"
import Image from "next/image"
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
        <div className="relative w-screen h-[800px] flex justify-center flex-col items-center">
          {layout.hero.backgroundImage?.url && (
            <Image
              src={layout.hero.backgroundImage?.url}
              alt="Background Image"
              layout="fill"
            />
          )}
          <h1
            className="text-8xl font-extrabold mb-[32px]"
            style={{ zIndex: 1 }}
          >
            {layout.hero.heading}
          </h1>
          <h2 className="font-semibold text-4xl" style={{ zIndex: 1 }}>
            {layout.hero.subHeading}
          </h2>
        </div>
      )}
      {children}
    </main>
  )
}
