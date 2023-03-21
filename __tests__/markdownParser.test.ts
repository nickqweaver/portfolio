import { MarkdownAST, MarkdownElement } from "utils/markDownParser/markdown"

describe("Markdownparser", () => {
  it("Creates heading 1 correctly", () => {
    const markdownString = "# Heading 1"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H1,
        jsxEl: "h1",
        children: [{ text: "Heading 1", style: "NONE" }],
      },
    ])
  })
  it("Creates heading 2 correctly", () => {
    const markdownString = "## Heading 2"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H2,
        jsxEl: "h2",
        children: [{ text: "Heading 2", style: "NONE" }],
      },
    ])
  })
  it("Creates heading 3 correctly", () => {
    const markdownString = "### Heading 3"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H3,
        jsxEl: "h3",
        children: [{ text: "Heading 3", style: "NONE" }],
      },
    ])
  })

  it("Creates heading 4 correctly", () => {
    const markdownString = "#### Heading 4"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H4,
        jsxEl: "h4",
        children: [{ text: "Heading 4", style: "NONE" }],
      },
    ])
  })
  it("Creates heading 5 correctly", () => {
    const markdownString = "##### Heading 5"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H5,
        jsxEl: "h5",
        children: [{ text: "Heading 5", style: "NONE" }],
      },
    ])
  })
  it("Creates heading 6 correctly", () => {
    const markdownString = "###### Heading 6"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H6,
        jsxEl: "h6",
        children: [{ text: "Heading 6", style: "NONE" }],
      },
    ])
  })
  it("Creates bolded list correctly", () => {
    const markdownString = `
      - List item 1
      - List item 2
      - List item 3
      - List item 4
    `
    const markdownAST = new MarkdownAST(markdownString)
    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.BL,
        jsxEl: "ul",
        children: [
          {
            type: MarkdownElement.LI,
            jsxEl: "li",
            children: [{ text: "List item 1", style: "NONE" }],
          },
          {
            type: MarkdownElement.LI,
            jsxEl: "li",
            children: [{ text: "List item 2", style: "NONE" }],
          },
          {
            type: MarkdownElement.LI,
            jsxEl: "li",
            children: [{ text: "List item 3", style: "NONE" }],
          },
          {
            type: MarkdownElement.LI,
            jsxEl: "li",
            children: [{ text: "List item 4", style: "NONE" }],
          },
        ],
      },
    ])
  })
  it("Creates Block Quote Correctly", () => {
    const markdownString = ">> Block Quote Here"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.BQ,
        jsxEl: "blockquote",
        children: [{ text: "Block Quote Here", style: "NONE" }],
      },
    ])
  })
  it("It creates single bold line correclty", () => {
    const markdownString = "**I am bold!**"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.P,
        jsxEl: "p",
        children: [{ text: "I am bold!", style: "BOLD" }],
      },
    ])
  })
  it("It creates line with bold and non bold text", () => {
    const markdownString = "**I am bold!**I am not bold!"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.P,
        jsxEl: "p",
        children: [
          { text: "I am bold!", style: "BOLD" },
          { text: "I am not bold!", style: "NONE" },
        ],
      },
    ])
  })
  it("Swaps no bold to bold", () => {
    const markdownString = "I am not bold! **I am bold!**"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.P,
        jsxEl: "p",
        children: [
          { text: "I am not bold!", style: "NONE" },
          { text: "I am bold!", style: "BOLD" },
        ],
      },
    ])
  })

  it("Swaps no italic to italic", () => {
    const markdownString = "I am not italic! _I am italic!_"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.P,
        jsxEl: "p",
        children: [
          { text: "I am not italic!", style: "NONE" },
          { text: "I am italic!", style: "ITALIC" },
        ],
      },
    ])
  })
})

it("Can handle dates appropriately", () => {
  const markdownString = "11/20/2021"
  const markdownAST = new MarkdownAST(markdownString)

  expect(markdownAST.build()).toEqual([
    {
      type: MarkdownElement.P,
      jsxEl: "p",
      children: [{ text: "11/20/2021", style: "NONE" }],
    },
  ])
})
it("Can handle italic dates appropriately", () => {
  const markdownString = "_11/20/2021 - Current_"
  const markdownAST = new MarkdownAST(markdownString)

  expect(markdownAST.build()).toEqual([
    {
      type: MarkdownElement.P,
      jsxEl: "p",
      children: [{ text: "11/20/2021 - Current", style: "ITALIC" }],
    },
  ])
})
it("Can handle heading dates appropriately", () => {
  const markdownString = "### 11/20/2021 - Current"
  const markdownAST = new MarkdownAST(markdownString)

  expect(markdownAST.build()).toEqual([
    {
      type: MarkdownElement.H3,
      jsxEl: "h3",
      children: [{ text: "11/20/2021 - Current", style: "NONE" }],
    },
  ])
})
it("Can handle single P tags appropriately", () => {
  const markdownString = "Hello World!"
  const markdownAST = new MarkdownAST(markdownString)

  expect(markdownAST.build()).toEqual([
    {
      type: MarkdownElement.P,
      jsxEl: "p",
      children: [{ text: "Hello World!", style: "NONE" }],
    },
  ])
})
