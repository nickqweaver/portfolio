import Link from "next/link"
import { routes } from "../constants/routes"
import { Button } from "./Button/Button"
import { Icon } from "../components/Icon"
import { IconNames } from "../graphql/generated/schema-types"

export const Navigation = (props: { variation?: "transparent" | "filled" }) => {
  return (
    <nav
      className="w-screen h-16 grid grid-cols-2 fixed"
      style={{
        zIndex: 2,
        backgroundColor: props.variation === "filled" ? "#FFF" : "transparent",
      }}
    >
      <div className="flex justify-start items-center pl-8">
        <Link href="/">
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Icon name={IconNames.Code} className="stroke-blue-light" />
            NW
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
            <Button key={route.slug} href={route.slug} title={route.title} />
          ) : (
            <Link key={route.slug} href={route.slug}>
              {route.title}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
