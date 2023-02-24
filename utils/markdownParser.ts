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
  const [symbol, ...rest] = line.split(" ")
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

    if (line.startsWith(Symbols.HEADING)) {
      return createHeading(line)
    }

    return {
      type: MarkdownElement.P,
      children: [{ text: "DUMMY EL" }],
    }
  })
  console.log(ast)
  return ast
}

export const markdownParser = (markdown: string) => {
  const ast = generateAST(markdown)
}
