import { MarkdownParentSymbol } from "./markdown"
import { MarkdownObject } from "./parser"

export abstract class MarkdownObj {
  line: string

  constructor(line: string) {
    this.line = line
  }

  /**
   *
   * @returns The line without parent markdown symbols
   */
  static trimSymbol(line: string) {
    const trimmedLine = line.trim()
    const [symbol, ...rest] = trimmedLine.split(" ")

    if (MarkdownObj.getParentSymbol(symbol) === 5) {
      return [symbol, ...rest].join(" ")
    }
    return rest.join(" ")
  }

  static getParentSymbol(symbol: string) {
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
}

export interface IMarkdownObj {
  create: () => MarkdownObject
}
