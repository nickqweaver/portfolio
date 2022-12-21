import Link from "next/link"
import { routes } from "../../constants/routes"
import { Button } from "../Button/Button"
import { Icon } from "../Icon"
import { IconNames } from "../../graphql/generated/schema-types"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import { useRouter } from "next/router"
import { MobileNavigation } from "./MobileNavigation"

export const Navigation = (props: { variation?: "transparent" | "filled" }) => {
  const { y } = useScrollPosition()
  const { route: currentRoute } = useRouter()

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
          <div className="grid gap-2 cursor-pointer grid-cols-2">
            <Icon
              name={IconNames.Code}
              className={isFilled ? "stroke-blue-light" : "stroke-white"}
            />
            <span className={`text-bold ${textColor}`}>NW</span>
          </div>
        </Link>
      </div>
      <div className="flex justify-end items-center px-8">
        <div
          className={`hidden md:flex space-x-7 font-semibold  whitespace-nowrap items-center`}
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
                <span
                  className={`${
                    `/${route.slug}` === currentRoute
                      ? "text-blue-light"
                      : textColor
                  } cursor-pointer`}
                >
                  {route.title}
                </span>
              </Link>
            )
          )}
        </div>
        <div className="sm:flex md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  )
}
