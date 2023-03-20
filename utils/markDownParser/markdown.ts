import { IMarkdownObj, MarkdownObj } from "./interfaces"
import { MarkdownChild, MarkdownChildren } from "./markdownChild"

export type MarkdownListType =
  | MarkdownParentSymbol.BULLETED_LIST
  | MarkdownParentSymbol.NUMBERED_LIST

export enum MarkdownElement {
  P = "paragraph",
  H1 = "heading-1",
  H2 = "heading-2",
  H3 = "heading-3",
  H4 = "heading-4",
  H5 = "heading-5",
  H6 = "heading-6",
  BQ = "block-quote",
  BL = "bulleted-list",
  NL = "numbered-list",
  LI = "list-item",
  LIC = "list-item-child",
}

export type JSXEL =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "li"
  | "ul"
  | "ol"
  | "blockquote"

export type MarkdownObject = {
  type: MarkdownElement
  children: MarkdownChild[]
  jsxEl: JSXEL
}

export enum MarkdownParentSymbol {
  HEADING = 1,
  BLOCK_QUOTE,
  BULLETED_LIST,
  NUMBERED_LIST,
  PARAGRAPH,
}
class MarkdownList implements IMarkdownObj {
  private type: MarkdownListType
  private lines: string[]

  constructor(lines: string[], type: MarkdownListType) {
    this.type = type
    this.lines = lines
  }

  private getElementFromType(): [MarkdownElement, JSXEL] {
    return this.type == MarkdownParentSymbol.BULLETED_LIST
      ? [MarkdownElement.BL, "ul"]
      : [MarkdownElement.NL, "ol"]
  }

  create(): MarkdownObject {
    const [type, jsxEl] = this.getElementFromType()
    return {
      type,
      jsxEl,
      children: this.lines.map((line) => ({
        type: MarkdownElement.LI,
        jsxEl: "li",
        children: new MarkdownChildren(line).children,
      })),
    }
  }
}

export class MarkdownHeading extends MarkdownObj implements IMarkdownObj {
  constructor(line: string) {
    super(line)
  }

  private getType(): [MarkdownElement, JSXEL] {
    const [symbol] = this.line.split(" ")

    switch (symbol.length) {
      case 0:
      case 1:
        return [MarkdownElement.H1, "h1"]
      case 2:
        return [MarkdownElement.H2, "h2"]
      case 3:
        return [MarkdownElement.H3, "h3"]
      case 4:
        return [MarkdownElement.H4, "h4"]
      case 5:
        return [MarkdownElement.H5, "h5"]
      // If for some reason in the future +6 is supported we will just render an H6
      default:
        return [MarkdownElement.H6, "h6"]
    }
  }

  create() {
    const [type, jsxEl] = this.getType()
    return {
      type,
      jsxEl,
      children: new MarkdownChildren(this.line).children,
    }
  }
}

class Markdown {
  createList(type: MarkdownListType, lines: string[]) {
    const list = new MarkdownList(lines, type).create()
    return list
  }

  create(element: MarkdownParentSymbol, line: string): MarkdownObject {
    switch (element) {
      case MarkdownParentSymbol.BLOCK_QUOTE:
        return {
          type: MarkdownElement.BQ,
          jsxEl: "blockquote",
          children: new MarkdownChildren(line).children,
        }
      case MarkdownParentSymbol.HEADING:
        return new MarkdownHeading(line).create()
      default:
        return {
          type: MarkdownElement.P,
          jsxEl: "p",
          children: new MarkdownChildren(line).children,
        }
    }
  }
}

export class MarkdownAST {
  private ast: MarkdownObject[] = []
  private markdown: string
  private mutableListTuple: [string[], MarkdownListType | null]

  constructor(markdown: string) {
    this.ast = []
    this.markdown = markdown
    this.mutableListTuple = [[], null]
  }

  private listChecks() {
    const [list, tupleType] = this.mutableListTuple

    if (list.length > 0 && tupleType) {
      const listAst = new Markdown().createList(tupleType, list)
      this.ast.push(listAst)
    }
  }

  buildList(parentSymbol: MarkdownListType, line: string) {
    const [list, type] = this.mutableListTuple
    if (type && type !== parentSymbol) {
      // The list type is different, add existing list to ast
      const listAst = new Markdown().createList(type, list)
      this.ast.push(listAst)
      // Clear old results and add new ones
      this.mutableListTuple = [[line], parentSymbol]
    } else {
      // Create a new list, or build to existing
      const newLines = [...this.mutableListTuple[0], line]
      this.mutableListTuple = [newLines, parentSymbol]
    }
  }

  build(): MarkdownObject[] {
    const lines = this.markdown.trim().split("\n")

    lines
      .filter((line) => line != "") // Hygraph Rich Text Adds unecessary line breaks
      .forEach((line) => {
        const trimmedLine = line.trim()
        const [symbol] = trimmedLine.split(" ")

        const parentSymbol = MarkdownObj.getParentSymbol(symbol)

        switch (parentSymbol) {
          case MarkdownParentSymbol.BULLETED_LIST:
          case MarkdownParentSymbol.NUMBERED_LIST:
            this.buildList(parentSymbol, line)
            break
          default:
            this.listChecks()
            const element = new Markdown().create(parentSymbol, line)
            this.ast.push(element)
        }
      })
    this.listChecks()
    return this.ast
  }
}
