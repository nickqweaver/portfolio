import { MarkdownObj } from "./interfaces"
import { MarkdownElement } from "./parser"

export enum TextSymbols {
  ITALIC = "_",
  BOLD = "**",
  CODE = "`",
}

export type MarkdownChild = {
  isCode?: boolean
  isItalic?: boolean
  isBold?: boolean
  isUnderlined?: boolean
  text?: string
  href?: string
  children?: MarkdownChild[]
  type?: MarkdownElement
}
export class MarkdownChildren {
  public children: MarkdownChild[]

  constructor(line: string) {
    this.children = this.applyTextStyles(line)
    // this.chars = line.split(" ")
  }

  private applyTextStyles(line: string) {
    const toggle = (condition: boolean) => !condition
    let isBuildingBoldStr = false
    let isBuildingItalicStr = false

    let concatIndex = -1
    let mutableString = ""
    const text: MarkdownChild[] = []

    line.split("").forEach((char, index) => {
      const isDoubleAstrix =
        (char === "*" && line[index + 1] === "*") ||
        (char === "*" && line[index - 1] === "*")

      const isUnderscore =
        char === "_" && (line[index - 1] !== "_" || line[index + 1] !== "_")

      if (isDoubleAstrix) {
        if (isBuildingBoldStr) {
          concatIndex = -1
          // Bold string ends, write the object
          if (mutableString.length > 0) {
            text.push({
              text: MarkdownObj.trimSymbol(mutableString),
              isBold: true,
            })
          }
        } else {
          // Start the bold string
          concatIndex = index + 2
          if (mutableString.length > 0) {
            text.push({
              text: MarkdownObj.trimSymbol(mutableString),
            })
          }
        }
        mutableString = ""
        isBuildingBoldStr =
          line[index - 1] === "*"
            ? toggle(isBuildingBoldStr)
            : isBuildingBoldStr
      } else if (isUnderscore) {
        if (isBuildingItalicStr) {
          concatIndex = -1
          // Italic string ends, write the object
          if (mutableString.length > 0) {
            text.push({
              text: MarkdownObj.trimSymbol(mutableString),
              isItalic: true,
            })
          }
        } else {
          // Start the Italic string
          concatIndex = index + 1
          if (mutableString.length > 0) {
            text.push({
              text: MarkdownObj.trimSymbol(mutableString),
            })
          }
        }
        mutableString = ""
        isBuildingItalicStr = toggle(isBuildingItalicStr)
      } else {
        concatIndex = index
      }

      // Another char not outside of bold
      if (concatIndex >= 0 && index === concatIndex) {
        // Build
        mutableString += char
        concatIndex = index + 1
      }

      if (index === line.length - 1 && mutableString.length > 0) {
        text.push({
          text: MarkdownObj.trimSymbol(mutableString),
        })
      }
    })

    // We don't know if we've ended until we find a **
    return text
  }
}
