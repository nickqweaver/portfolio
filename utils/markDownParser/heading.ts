import { IMarkdownObj, MarkdownObj } from "./interfaces"
import { MarkdownElement } from "./parser"

export class Heading extends MarkdownObj implements IMarkdownObj {
  constructor(line: string) {
    super(line)
  }

  private getType() {
    const [symbol] = this.line.split(" ")

    switch (symbol.length) {
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
      children: [
        {
          text: this.trimSymbol(),
        },
      ],
    }
  }
}
