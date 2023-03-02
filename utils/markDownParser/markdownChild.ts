import { MarkdownObj } from "./interfaces"
import { MarkdownElement } from "./parser"

export class MarkdownChild {
  public isCode?: boolean
  public isItalic?: boolean
  public isBold?: boolean
  public isUnderlined?: boolean
  public text?: string
  public href?: string
  public children?: MarkdownChild[]
  public type?: MarkdownElement

  constructor(line: string) {
    this.text = MarkdownObj.trimSymbol(line)
  }
}
