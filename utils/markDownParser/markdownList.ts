import { IMarkdownObj, MarkdownObj } from "./interfaces"
import { MarkdownParentSymbol } from "./markdown"
import { MarkdownElement } from "./parser"

export type MarkdownListType =
  | MarkdownParentSymbol.BULLETED_LIST
  | MarkdownParentSymbol.NUMBERED_LIST

export class MarkdownList implements IMarkdownObj {
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

  create() {
    return {
      type: this.getElementFromType(),
      children: this.lines.map((line) => ({
        type: MarkdownElement.LI,
        children: [
          {
            text: MarkdownObj.trimSymbol(line),
          },
        ],
      })),
    }
  }
}
