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
          <div className="relative z-2 flex flex-col items-center space-y-5">
            {layout.hero.icon && (
              <Icon
                className="h-[64px] w-[64px] sm:h-[84px] md:w-[84px]"
                style={{ zIndex: 1 }}
                name={layout.hero.icon.name}
              />
            )}
            <h1
              className="text-5xl md:text-7xl xl:text-8xl  font-extrabold mb-[32px]"
              style={{ zIndex: 1 }}
            >
              {layout.hero.heading}
            </h1>
            <h2
              className="text-2xl md:text-4xl font-semibold"
              style={{ zIndex: 1 }}
            >
              {layout.hero.subHeading}
            </h2>
          </div>
        </div>
      )}
      {children}
    </main>
  )
}
