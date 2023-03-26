import { createElement } from "react"
import { MarkdownObject } from "./markdown"
import { MarkdownChild } from "./markdownChild"

export const renderMarkdownTree = (tree: MarkdownObject[]) => {
  // TODO - Only single styles are supported currently in the AST
  // Once this is changed we need to ensure all/multiple tailwind classNames get applied
  // based on the style type

  const wrapTagsIfApplicable = (child: MarkdownChild) => {
    if (child.style === "BOLD") {
      return createElement("strong", undefined, child.text)
    }
    if (child.style === "ITALIC") {
      return createElement("em", undefined, child.text)
    }
    return child.text
  }

  const traverseNodes = (child: MarkdownChild): React.ReactNode | string => {
    if (child.jsxEl) {
      return createElement(
        child.jsxEl,
        undefined,
        child.children?.map((child) => traverseNodes(child))
      )
    }
    return wrapTagsIfApplicable(child)
  }

  return tree.map((node) => {
    return createElement(
      node.jsxEl,
      undefined,
      node.children.map(traverseNodes)
    )
  })
}
