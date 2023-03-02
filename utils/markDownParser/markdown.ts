import { Heading } from "./heading"
import { MarkdownObj } from "./interfaces"
import { MarkdownChild } from "./markdownChild"
import { MarkdownList, MarkdownListType } from "./markdownList"
import { MarkdownElement } from "./parser"

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
      const listAst = new MarkdownList(list, tupleType).create()
      this.ast.push(listAst)
    }
  }

  buildList(parentSymbol: MarkdownListType, line: string) {
    const [list, type] = this.mutableListTuple
    if (type && type !== parentSymbol) {
      // The list type is different, add existing list to ast
      const listAst = new MarkdownList(list, type)
      this.ast.push(listAst.create())
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
          case MarkdownParentSymbol.HEADING:
            this.listChecks()
            const headingAst = new Heading(line).create()
            this.ast.push(headingAst)
            break
          case MarkdownParentSymbol.BLOCK_QUOTE:
            this.listChecks()
            this.ast.push({
              type: MarkdownElement.BQ,
              children: [new MarkdownChild(line)],
            })
            break
          default:
            this.listChecks()
            this.ast.push({
              type: MarkdownElement.P,
              children: [new MarkdownChild(line)],
            })
        }
      })
    this.listChecks()
    return this.ast
  }
}
