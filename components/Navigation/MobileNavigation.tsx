import { IconNames } from "../Icon"
import { Icon } from "../Icon"
import { NavigationProps } from "./Navigation"

export const MobileNavigation = (props: NavigationProps) => {
  return (
    <div>
      <Icon
        name={IconNames.Hamburger}
        size={32}
        className={`${
          props.variation === "filled" ? "stroke-blue-light" : "stroke-white"
        }`}
      />
    </div>
  )
}
