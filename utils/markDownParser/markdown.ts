import { Heading } from "./heading"
import { MarkdownElement, MarkdownObject } from "./parser"

enum MarkdownParentSymbol {
  HEADING,
  BLOCK_QUOTE,
  BULLETED_LIST,
  NUMBERED_LIST,
  PARAGRAPH,
}

export class MarkdownAST {
  private markdown: string

  constructor(markdown: string) {
    this.markdown = markdown
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

  build(): MarkdownObject[] {
    const lines = this.markdown.trim().split("\n")

    return lines
      .filter((line) => line != "") // Hygraph Rich Text Adds unecessary line breaks
      .map((line) => {
        const trimmedLine = line.trim()
        const [symbol] = trimmedLine.split(" ")

        const parentSymbol = this.getParentSymbol(symbol)

        switch (parentSymbol) {
          case MarkdownParentSymbol.HEADING:
            return new Heading(line).create()
          default:
            return {
              type: MarkdownElement.P,
              children: [{ text: "FAKE" }],
            }
        }
      })
  }
}
