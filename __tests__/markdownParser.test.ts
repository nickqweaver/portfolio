import { MarkdownAST } from "utils/markDownParser/markdown"
import { MarkdownElement, markdownParser } from "utils/markDownParser/parser"

describe("Markdownparser", () => {
  it("Creates heading 1 correctly", () => {
    const markdownString = "# Heading 1"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H1,
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
        children: [{ text: "Heading 5" }],
      },
    ])
  })
  it("Creates heading 6 correctly", () => {
    const markdownString = "###### Heading 6"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.H6,
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
        children: [
          {
            type: MarkdownElement.LI,
            children: [{ text: "List item 1", style: "NONE" }],
          },
          {
            type: MarkdownElement.LI,
            children: [{ text: "List item 2", style: "NONE" }],
          },
          {
            type: MarkdownElement.LI,
            children: [{ text: "List item 3", style: "NONE" }],
          },
          {
            type: MarkdownElement.LI,
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
        children: [{ text: "I am bold!", style: "BOLD" }],
      },
    ])
  })
  it("It creates line with bold and non bold text", () => {
    const markdownString = "**I am bold!** I am not bold!"
    const markdownAST = new MarkdownAST(markdownString)

    expect(markdownAST.build()).toEqual([
      {
        type: MarkdownElement.P,
        children: [
          { text: "I am bold!", style: "BOLD" },
          { text: "I am not bold!", style: "NONE" },
        ],
      },
    ])
  })
})
