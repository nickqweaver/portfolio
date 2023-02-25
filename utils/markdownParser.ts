enum MarkdownElement {
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

enum Symbols {
  HEADING = "#",
  ITALIC = "_",
  UNDERLINED = "_", // Hygraph markdown uses underlined for both, this will be problematic. I will evaluate all _ as italic
  BOLD = "**",
  BLOCK_QUOTE = ">",
  CODE = "`",
  B_List = "-",
}

type MarkdownChild = {
  isCode?: boolean
  isItalic?: boolean
  isBold?: boolean
  isUnderlined?: boolean
  text?: string
  href?: string
  children?: [MarkdownChild]
}

type MarkdownObject = {
  type: MarkdownElement
  children: MarkdownChild[]
}

type MarkdownAST = MarkdownObject[]

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
    children: rest.map((child) => ({
      text: child,
    })),
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
      children: [{ text: trimSymbol(line) }],
    })),
  }
}

const createBlockQuote = (line: string) => {
  return {
    type: MarkdownElement.BQ,
    children: [
      {
        text: trimSymbol(line),
      },
    ],
  }
}

const buildBoldString = () => {}

const textStyles = (line: string) => {
  const toggle = (condition: boolean) => !condition
  let isBuildingBoldStr = false
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
    // Inside a bold statement
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
    } else {
      concatIndex = index
    }

    // Anyother char not outside of bold

    if (concatIndex >= 0 && index === concatIndex) {
      // Build
      mutableString += char
      concatIndex = index + 1
    }
  })

  console.log(text)

  // We don't know if we've ended until we find a **
  return line
}

const generateAST = (markdown: string): MarkdownAST => {
  const lines = markdown.split("\n")
  console.log(lines)

  let mutableBulletListItems: string[] = []
  let mutableNumberedListItems: string[] = []

  const ast = lines.map((line) => {
    const [symbol] = line.split(" ")
    const isSymbolNumber = parseInt(symbol)

    if (!line.startsWith(Symbols.B_List) && mutableBulletListItems.length > 0) {
      // Lame we have to take a copy to clear the mutable list
      const listItems = [...mutableBulletListItems]
      mutableBulletListItems = []
      return createList(listItems, MarkdownElement.BL)
    }

    if (!isSymbolNumber && mutableNumberedListItems.length > 0) {
      // Lame we have to take a copy to clear the mutable list
      const listItems = [...mutableNumberedListItems]
      mutableNumberedListItems = []
      return createList(listItems, MarkdownElement.NL)
    }

    if (line.startsWith(Symbols.B_List)) {
      mutableBulletListItems.push(line)
    }

    if (isSymbolNumber) {
      mutableNumberedListItems.push(line)
    }

    if (line.startsWith(Symbols.BLOCK_QUOTE)) {
      return createBlockQuote(line)
    }

    if (line.startsWith(Symbols.HEADING)) {
      return createHeading(line)
    }

    return {
      type: MarkdownElement.P,
      children: [{ text: textStyles(line) }],
    }
  })

  return ast
}

export const markdownParser = (markdown: string) => {
  const ast = generateAST(markdown)
}
