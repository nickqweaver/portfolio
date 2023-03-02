/**
 * Writing this parser isn't ideal, however Hygraph returns the Raw text field as a RichFieldAST type. RichFieldAST gets mapped to any
 * To keep type safety, and for fun I decided to write my own parser. I know this is not going to be super performant.
 */

export enum MarkdownElement {
  P = "paragraph",
  H1 = "heading-1",
  H2 = "heading-2",
  H3 = "heading-3",
  H4 = "heading-4",
  H5 = "heading-5",
  H6 = "heading-6",
  BQ = "block-quote",
  BL = "bulleted-list",
  NL = "numbered-list",
  LI = "list-item",
  LIC = "list-item-child",
}

export enum Symbols {
  ITALIC = "_",
  BOLD = "**",
  CODE = "`",
}

export type MarkdownChild = {
  isCode?: boolean
  isItalic?: boolean
  isBold?: boolean
  isUnderlined?: boolean
  text?: string
  href?: string
  children?: MarkdownChild[]
  type?: MarkdownElement
}

export type MarkdownObject = {
  type: MarkdownElement
  children: MarkdownChild[]
}

export type MarkdownAST = MarkdownObject[]

const isHeadingType = (markdownElement: MarkdownElement): boolean => {
  switch (markdownElement) {
    case MarkdownElement.H1:
    case MarkdownElement.H2:
    case MarkdownElement.H3:
    case MarkdownElement.H4:
    case MarkdownElement.H5:
    case MarkdownElement.H6:
      return true
    default:
      return false
  }
}

const mapHeadingType = (symbolLength: number) => {
  switch (symbolLength) {
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
    case 6:
      return MarkdownElement.H6
    default:
      return MarkdownElement.P // If the symbol length is not between 1-6, it's not a heading (this shouldn't happen)
  }
}

const createHeading = (line: string): MarkdownObject => {
  const [symbol, ...rest] = line.split(" ")

  return {
    type: mapHeadingType(symbol.length),
    children: textStyles(rest.join(" ")),
  }
}

const trimSymbol = (line: string) => {
  const [_symbol, ...rest] = line.split(" ")
  return rest.join(" ").trim()
}

const createList = (
  lines: string[],
  type: MarkdownElement.BL | MarkdownElement.NL
): MarkdownObject => {
  return {
    type,
    children: lines.map((line) => ({
      type: MarkdownElement.LI,
      children: textStyles(trimSymbol(line)),
    })),
  }
}

const createBlockQuote = (line: string) => {
  return {
    type: MarkdownElement.BQ,
    children: textStyles(trimSymbol(line)),
  }
}

const textStyles = (line: string): MarkdownChild[] => {
  const toggle = (condition: boolean) => !condition
  let isBuildingBoldStr = false
  let isBuildingItalicStr = false
  // Need to know if i am between ** and **
  // Look for **
  // build string after **
  // When I find ** again push text object

  let concatIndex = -1
  let mutableString = ""
  const text: MarkdownChild[] = []

  line.split("").forEach((char, index) => {
    const isDoubleAstrix =
      (char === "*" && line[index + 1] === "*") ||
      (char === "*" && line[index - 1] === "*")

    const isUnderscore =
      char === "_" && (line[index - 1] !== "_" || line[index + 1] !== "_")

    if (isDoubleAstrix) {
      if (isBuildingBoldStr) {
        concatIndex = -1
        // Bold string ends, write the object
        if (mutableString.length > 0) {
          text.push({
            text: mutableString,
            isBold: true,
          })
        }
      } else {
        // Start the bold string
        concatIndex = index + 2
        if (mutableString.length > 0) {
          text.push({
            text: mutableString,
          })
        }
      }
      mutableString = ""
      isBuildingBoldStr =
        line[index - 1] === "*" ? toggle(isBuildingBoldStr) : isBuildingBoldStr
    } else if (isUnderscore) {
      if (isBuildingItalicStr) {
        concatIndex = -1
        // Italic string ends, write the object
        if (mutableString.length > 0) {
          text.push({
            text: mutableString,
            isItalic: true,
          })
        }
      } else {
        // Start the Italic string
        concatIndex = index + 1
        if (mutableString.length > 0) {
          text.push({
            text: mutableString,
          })
        }
      }
      mutableString = ""
      isBuildingItalicStr = toggle(isBuildingItalicStr)
    } else {
      concatIndex = index
    }

    // Another char not outside of bold
    if (concatIndex >= 0 && index === concatIndex) {
      // Build
      mutableString += char
      concatIndex = index + 1
    }

    if (index === line.length - 1 && mutableString.length > 0) {
      text.push({
        text: mutableString,
      })
    }
  })

  // We don't know if we've ended until we find a **
  return text
}

const mapSymbol = (line: string) => {
  const [symbol] = line.trim().split(" ")
  const isSymbolNumber = parseInt(symbol)

  if (line.startsWith(Symbols.HEADING)) {
    return mapHeadingType(symbol.length)
  } else if (line.startsWith(Symbols.B_List)) {
    return MarkdownElement.BL
  } else if (line.startsWith(Symbols.BLOCK_QUOTE)) {
    return MarkdownElement.BQ
  } else if (isSymbolNumber) {
    return MarkdownElement.NL
  } else {
    return MarkdownElement.P
  }
}

const generateAST = (markdown: string): MarkdownAST => {
  const lines = markdown.trim().split("\n")

  const ast: MarkdownAST = []

  let mutableBulletListItems: string[] = []
  let mutableNumberedListItems: string[] = []

  lines.forEach((line) => {
    const trimmedLine = line.trim()

    const markdownEl = mapSymbol(line)

    if (markdownEl === MarkdownElement.BL) {
      mutableBulletListItems.push(trimmedLine)
    }

    if (markdownEl === MarkdownElement.NL) {
      mutableNumberedListItems.push(trimmedLine)
    }

    if (
      !(markdownEl === MarkdownElement.BL) &&
      mutableBulletListItems.length > 0
    ) {
      // Lame we have to take a copy to clear the mutable list
      const listItems = [...mutableBulletListItems]
      mutableBulletListItems = []
      ast.push(createList(listItems, MarkdownElement.BL))
    }
    if (
      markdownEl === MarkdownElement.NL &&
      mutableNumberedListItems.length > 0
    ) {
      // Lame we have to take a copy to clear the mutable list
      // Pass by reference clear inside fn ?
      const listItems = [...mutableNumberedListItems]
      mutableNumberedListItems = []
      ast.push(createList(listItems, MarkdownElement.NL))
    }
    if (markdownEl === MarkdownElement.BQ) {
      ast.push(createBlockQuote(trimmedLine))
    }

    if (isHeadingType(markdownEl)) {
      ast.push(createHeading(trimmedLine))
    }
    // All cases fail default casef

    if (markdownEl === MarkdownElement.P) {
      ast.push({
        type: MarkdownElement.P,
        children: textStyles(trimmedLine),
      })
    }
  })
  console.log(ast)
  return ast
}

export const markdownParser = (markdown: string) => {
  const ast = generateAST(markdown)
  return ast
}
