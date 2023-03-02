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

  /**
   * We need to change the start position of the substring based on the style to account for
   * the symbols that do not need to be included in the AST data.
   *
   * - Bold strings (**) we slide the cursor forward 2
   * - Italic strings (_) we slide the cursor forward 1
   * - Non styled strings we keep the default position
   *
   * @param style Style of the current text string
   * @returns A number to add to the current cursor position
   */
  private incrementStartCursor(style: StyleType) {
    return style === "BOLD" ? 2 : style === "ITALIC" ? 1 : 0
  }

  /**
   * We need to change the end position of the substring based on the style to account for
   * the symbols that do not need to be included in the AST data.
   *
   * The JS substring method end position is NOT inclusive
   * - Italic & Bold strings we keep the cursor at the end position
   * - Non styled strings we slide the cursor forward 1 position
   *
   * @param style Style of the current child
   * @returns A number to add to the current cursor position
   */
  private trimEndCursor(style: StyleType) {
    // return style === "BOLD" ? -1 : style === "ITALIC" ? 0 : 1
    return style === "BOLD" || style === "ITALIC" ? 0 : 1
  }

  /**
   * TEST CASE
   * **
   * I am bold! // STYLE CHANGE BOLD -> NONE (PUSH 2, 12)
   * SLIDE START + 2
   * **
   * I am not bold! _I am italic!_I am regular text // STYLE CHANGE NONE -> ITALIC (PUSH 14, 30)

   * 
   */
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
          // We slide the start cursor 2 positions to account for the **
          // Match the end cursor
          // startCursor = index + 2
        }
      }

      if (isUnderscore) {
        newStyle = this.toggleStyle(currentStyle, "ITALIC")
        if (newStyle === "ITALIC") {
          // We slide the start cursor 1 position to account for _
          // When a style changes we end up sliding the cursor up to new style before pushing it
          // We can either figure out a bettter way to increment the start cursor or add child in these blocks too
          // startCursor++
        }
      }

      if (endCursor > startCursor) {
        console.log(currentStyle, newStyle)
        if (currentStyle !== newStyle || endCursor === line.length - 1) {
          console.log(
            "PUSHING CHILD!",
            `START, END (${
              startCursor + this.incrementStartCursor(currentStyle)
            }, ${endCursor + this.trimEndCursor(currentStyle)})`
          )
          this.addChild(
            line
              .substring(
                startCursor + this.incrementStartCursor(currentStyle),
                endCursor + this.trimEndCursor(currentStyle)
              )
              .trim(),
            currentStyle
          )
          startCursor = endCursor + this.incrementStartCursor(currentStyle)
        }
      }
      endCursor = index + 1
    })
  }
}
