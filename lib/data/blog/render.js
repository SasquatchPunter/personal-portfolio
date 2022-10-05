//TODO - queries and renders rich text to react components
const {
  documentToReactComponents,
} = require("@contentful/rich-text-react-renderer");
const { BLOCKS, MARKS } = require("@contentful/rich-text-types");

const { Bold, Code, Italic, Underline } = require("../../../components/marks");
const { Paragraph, Document, Quote } = require("../../../components/blocks");

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (text) => <Code>{text}</Code>,
    [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => <Document>{children}</Document>,
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
  },
};

function renderBlogPost(document) {
  return documentToReactComponents(document, options);
}

module.exports = { renderBlogPost };
