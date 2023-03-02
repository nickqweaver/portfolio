import { MarkdownObject } from "./parser"

export abstract class MarkdownObj {
  line: string

  constructor(line: string) {
    this.line = line
  }

  /**
   *
   * @returns The line without markdown symbols
   */
  static trimSymbol(line: string) {
    const trimmedLine = line.trim()
    const [_symbol, ...rest] = trimmedLine.split(" ")
    return rest.join(" ")
  }
}

export interface IMarkdownObj {
  create: () => MarkdownObject
}
