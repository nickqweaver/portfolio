import { MarkdownObject, MarkdownParentSymbol } from "./markdown"

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

  static isDateStr(str: string) {
    const regexExp = /^\d{2}\/\d{2}\/\d{4}$/

    return regexExp.test(str)
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
          ? MarkdownObj.isDateStr(symbol)
            ? MarkdownParentSymbol.PARAGRAPH
            : MarkdownParentSymbol.NUMBERED_LIST
          : MarkdownParentSymbol.PARAGRAPH
    }
  }
}

export interface IMarkdownObj {
  create: () => MarkdownObject
}
