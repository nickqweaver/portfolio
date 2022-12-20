import Link from "next/link"
import { routes } from "../constants/routes"
import { Button } from "./Button/Button"
import { Icon } from "../components/Icon"
import { IconNames } from "../graphql/generated/schema-types"
import { useScrollPosition } from "../hooks/useScrollPosition"

export const Navigation = (props: { variation?: "transparent" | "filled" }) => {
  const { y } = useScrollPosition()

  const isFilled = props.variation === "filled" || y > 150
  const textColor = isFilled
    ? "text-primary-light hover:text-blue-light"
    : "text-white hover:text-sheet"

  return (
    <nav
      className={`w-screen h-16 grid grid-cols-2 fixed  transition-colors ${
        isFilled ? "bg-white shadow-sm" : "transparent"
      }`}
      style={{
        zIndex: 2,
      }}
    >
      <div className="flex justify-start items-center pl-8">
        <Link href="/">
          <div
            className="grid gap-2 cursor-pointer"
            style={{
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Icon
              name={IconNames.Code}
              className={isFilled ? "stroke-blue-light" : "stroke-white"}
            />
            <span className={`text-bold ${textColor}`}>NW</span>
          </div>
        </Link>
      </div>
      <div
        className={`grid justify-items-center items-center justify-content font-semibold whitespace-nowrap`}
        style={{
          gridTemplateColumns: `repeat(auto-fit, 150px)`,
        }}
      >
        {routes.map((route) =>
          route.hasButtonUi ? (
            <Button
              key={route.slug}
              href={route.slug}
              title={route.title}
              type={isFilled ? "primary" : "secondary"}
            />
          ) : (
            <Link key={route.slug} href={route.slug}>
              <span className={`${textColor} cursor-pointer`}>
                {route.title}
              </span>
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
