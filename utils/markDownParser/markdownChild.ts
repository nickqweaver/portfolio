import { MarkdownObj } from "./interfaces"
import { JSXEL, MarkdownElement, MarkdownObject } from "./markdown"

export enum TextSymbols {
  ITALIC = "_",
  BOLD = "**",
  CODE = "`",
}

export type StyleType = "BOLD" | "ITALIC" | "CODE" | "NONE"

export type MarkdownChild = {
  style?: StyleType
  text?: string
  href?: string
} & Partial<MarkdownObject>

/**
 * TODO:
 * 1. Add nested abilities (Italic & Bold Text)
 * 2. Dates aren't fully supported -> Heading/Italic/Date fails
 * 2. Add Code Snippet abilitiy
 * 3. Create benchmarks
 */
export class MarkdownChildren {
  public children: MarkdownChild[]

  constructor(line: string) {
    this.children = []
    this.applyTextStyles(line)
  }

  private addChild(text: string, style: StyleType) {
    const child = {
      text: MarkdownObj.trimSymbol(text),
      style,
    }
    this.children.push(child)
  }

  private toggleStyle(currentStyle: StyleType, newStyle: StyleType) {
    if (currentStyle === newStyle) {
      return "NONE"
    } else {
      return newStyle
    }
  }

  private getSubstringStart(style: StyleType, startPos: number) {
    return style === "BOLD"
      ? startPos + 2
      : style === "ITALIC"
      ? startPos + 1
      : startPos
  }

  private getSubstringEnd(style: StyleType, endPos: number) {
    return style === "BOLD"
      ? endPos - 1
      : style === "ITALIC"
      ? endPos
      : endPos + 1
  }

  private applyTextStyles(line: string) {
    const chars = line.split("")

    let startCursor = 0
    let endCursor = 0
    let newStyle: StyleType = "NONE"

    chars.forEach((char, index) => {
      const currentStyle = newStyle

      const isDoubleAstrix = char === "*" && line[index + 1] === "*"
      const isUnderscore =
        char === "_" && (line[index - 1] !== "_" || line[index + 1] !== "_")

      /**
       * If we find a double astrix we know we are either at the end or beginning of a bold string.
       * We can determine if we are entering or exiting by looking at the previous style.
       */
      if (isDoubleAstrix) {
        newStyle = this.toggleStyle(currentStyle, "BOLD")
        if (newStyle === "BOLD") {
          endCursor--
        } else {
          endCursor++
        }
      }
      /**
       * If we find an underscore we know we are either at the end or beginning of an italic string.
       * We can determine if we are entering or exiting by looking at the previous style.
       */
      if (isUnderscore) {
        newStyle = this.toggleStyle(currentStyle, "ITALIC")
        if (newStyle === "ITALIC") {
          endCursor--
        }
      }

      /**
       * If the endCursor is greater than the startCursor we can perform the checks to determine if we need to
       * write the string to an AST object.
       * To write the string we are relying on a style change, if no style change occurs we simply wait to write it until
       * we reach the end of the string.
       */
      if (endCursor > startCursor) {
        if (currentStyle !== newStyle || endCursor === line.length - 1) {
          this.addChild(
            line
              .substring(
                this.getSubstringStart(currentStyle, startCursor),
                this.getSubstringEnd(currentStyle, endCursor)
              )
              .trim(),
            currentStyle
          )
          startCursor = endCursor + 1
        }
      }
      endCursor = index + 1
    })
  }
}
