import { MarkdownObj } from "./interfaces"
import { MarkdownElement } from "./parser"

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
  children?: MarkdownChild[]
  type?: MarkdownElement
}
export class MarkdownChildren {
  public children: MarkdownChild[]

  constructor(line: string) {
    this.children = []
    this.applyTextStyles(line)
  }

  // private applyStyles(line: string) {
  //   const toggle = (condition: boolean) => !condition
  //   let isBuildingBoldStr = false
  //   let isBuildingItalicStr = false

  //   let concatIndex = -1
  //   let mutableString = ""
  //   const text: MarkdownChild[] = []

  //   line.split("").forEach((char, index) => {
  //     const isDoubleAstrix =
  //       (char === "*" && line[index + 1] === "*") ||
  //       (char === "*" && line[index - 1] === "*")

  //     const isUnderscore =
  //       char === "_" && (line[index - 1] !== "_" || line[index + 1] !== "_")

  //     if (isDoubleAstrix) {
  //       if (isBuildingBoldStr) {
  //         concatIndex = -1
  //         // Bold string ends, write the object
  //         if (mutableString.length > 0) {
  //           text.push({
  //             text: mutableString,
  //             style: "BOLD",
  //           })
  //         }
  //       } else {
  //         // Start the bold string
  //         concatIndex = index + 2
  //         if (mutableString.length > 0) {
  //           text.push({
  //             text: mutableString,
  //             style: "NONE",
  //           })
  //         }
  //       }
  //       mutableString = ""
  //       isBuildingBoldStr =
  //         line[index - 1] === "*"
  //           ? toggle(isBuildingBoldStr)
  //           : isBuildingBoldStr
  //     } else if (isUnderscore) {
  //       if (isBuildingItalicStr) {
  //         concatIndex = -1
  //         // Italic string ends, write the object
  //         if (mutableString.length > 0) {
  //           text.push({
  //             text: MarkdownObj.trimSymbol(mutableString),
  //             style: "ITALIC",
  //           })
  //         }
  //       } else {
  //         // Start the Italic string
  //         concatIndex = index + 1
  //         if (mutableString.length > 0) {
  //           text.push({
  //             text: MarkdownObj.trimSymbol(mutableString),
  //             style: "NONE",
  //           })
  //         }
  //       }
  //       mutableString = ""
  //       isBuildingItalicStr = toggle(isBuildingItalicStr)
  //     } else {
  //       concatIndex = index
  //     }

  //     // Another char not outside of bold
  //     if (concatIndex >= 0 && index === concatIndex) {
  //       // Build
  //       mutableString += char
  //       concatIndex = index + 1
  //     }

  //     if (index === line.length - 1 && mutableString.length > 0) {
  //       text.push({
  //         text: MarkdownObj.trimSymbol(mutableString),
  //         style: "NONE",
  //       })
  //     }
  //   })

  //   // We don't know if we've ended until we find a **
  //   return text
  // }

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
      console.log(`START: ${startCursor}`, `END: ${endCursor}`)
      const currentStyle = newStyle

      const isDoubleAstrix = char === "*" && line[index + 1] === "*"
      const isUnderscore =
        char === "_" && (line[index - 1] !== "_" || line[index + 1] !== "_")

      if (isDoubleAstrix) {
        newStyle = this.toggleStyle(currentStyle, "BOLD")
        if (newStyle === "BOLD") {
          endCursor--
        } else {
          endCursor++
        }
      }

      if (isUnderscore) {
        newStyle = this.toggleStyle(currentStyle, "ITALIC")
        if (newStyle === "ITALIC") {
          endCursor--
        }
      }

      if (endCursor > startCursor) {
        console.log(currentStyle, newStyle)
        if (currentStyle !== newStyle || endCursor === line.length - 1) {
          console.log(
            "PUSHING CHILD!",
            `START, END (${startCursor}, ${endCursor + 1})`
          )
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
