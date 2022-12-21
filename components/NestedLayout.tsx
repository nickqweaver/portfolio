import React from "react"
import Image from "next/image"
import { LayoutFragmentFragment } from "../graphql/generated/schema-types"
import { Icon } from "./Icon"

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
        <div className="relative w-full h-[800px] flex justify-center flex-col items-center">
          {layout.hero.backgroundImage?.url && (
            <Image
              src={layout.hero.backgroundImage?.url}
              alt="Background Image"
              layout="fill"
            />
          )}
          {layout.hero.icon && (
            <Icon
              size={84}
              style={{ zIndex: 1 }}
              name={layout.hero.icon.name}
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
