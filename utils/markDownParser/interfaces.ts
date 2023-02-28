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
  trimSymbol() {
    const [_symbol, ...rest] = this.line.split(" ")
    return rest.join(" ")
  }
}

export interface IMarkdownObj {
  create: () => MarkdownObject
}
