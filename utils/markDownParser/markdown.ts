import { IMarkdownObj, MarkdownObj } from "./interfaces"
import { MarkdownChild, MarkdownChildren } from "./markdownChild"
import { MarkdownElement } from "./parser"

export type MarkdownListType =
  | MarkdownParentSymbol.BULLETED_LIST
  | MarkdownParentSymbol.NUMBERED_LIST

export type MarkdownObject = {
  type: MarkdownElement
  children: MarkdownChild[]
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

  private getElementFromType() {
    return this.type == MarkdownParentSymbol.BULLETED_LIST
      ? MarkdownElement.BL
      : MarkdownElement.NL
  }

  create(): MarkdownObject {
    return {
      type: this.getElementFromType(),
      children: this.lines.map((line) => ({
        type: MarkdownElement.LI,
        children: new MarkdownChildren(line).children,
      })),
    }
  }
}

export class MarkdownHeading extends MarkdownObj implements IMarkdownObj {
  constructor(line: string) {
    super(line)
  }

  private getType() {
    const [symbol] = this.line.split(" ")

    switch (symbol.length) {
      case 0:
      case 1:
        return MarkdownElement.H1
      case 2:
        return MarkdownElement.H2
      case 3:
        return MarkdownElement.H3
      case 4:
        return MarkdownElement.H4
      case 5:
        return MarkdownElement.H5
      // If for some reason in the future +6 is supported we will just render an H6
      default:
        return MarkdownElement.H6
    }
  }

  create() {
    return {
      type: this.getType(),
      children: new MarkdownChildren(this.line).children,
    }
  }
}

class Markdown {
  createList(type: MarkdownListType, lines: string[]) {
    const list = new MarkdownList(lines, type).create()
    return list
  }

  create(element: MarkdownParentSymbol, line: string) {
    switch (element) {
      case MarkdownParentSymbol.BLOCK_QUOTE:
        return {
          type: MarkdownElement.BQ,
          children: new MarkdownChildren(line).children,
        }
      case MarkdownParentSymbol.HEADING:
        return new MarkdownHeading(line).create()
      default:
        return {
          type: MarkdownElement.P,
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

  private getParentSymbol(symbol: string) {
    const isSymbolNumber = (symbol: string) => parseInt(symbol)

    switch (symbol) {
      case ">>":
        return MarkdownParentSymbol.BLOCK_QUOTE
      case "-":
        return MarkdownParentSymbol.BULLETED_LIST
      default:
        return symbol.startsWith("#")
          ? MarkdownParentSymbol.HEADING
          : isSymbolNumber(symbol)
          ? MarkdownParentSymbol.NUMBERED_LIST
          : MarkdownParentSymbol.PARAGRAPH
    }
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

        const parentSymbol = this.getParentSymbol(symbol)

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
