const {
  documentToReactComponents,
} = require("@contentful/rich-text-react-renderer");
const { BLOCKS, MARKS, INLINES } = require("@contentful/rich-text-types");

const { Bold, Code, Italic, Underline } = require("../../../components/marks");
const {
  Paragraph,
  Document,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  EmbeddedEntry,
  HR,
  ListItem,
  OL_List,
  UL_List,
} = require("../../../components/blocks");

function renderOptions(links) {
  const entryMap = new Map();
  // const assetMap = new Map();

  for (const entry of [...links.entries.inline, ...links.entries.block]) {
    entryMap.set(entry.sys.id, entry);
  }

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
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,
      [BLOCKS.HR]: (node, children) => <HR />,
      [BLOCKS.OL_LIST]: (node, children) => <OL_List>{children}</OL_List>,
      [BLOCKS.UL_LIST]: (node, children) => <UL_List>{children}</UL_List>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,

      /* EMBEDDED NODES */

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const id = node.data.target.sys.id;
        const entry = entryMap.get(id);
        return <EmbeddedEntry entry={entry} />;
      },
      // [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      //   <EmbeddedAssetBlock node={node} entries={entryMap} />
      // ),
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const id = node.data.target.sys.id;
        const entry = entryMap.get(id);
        return <EmbeddedEntry entry={entry} />;
      },
    },
  };

  return options;
}

function renderBlogPost(document, links) {
  return documentToReactComponents(document, renderOptions(links));
}

module.exports = { renderBlogPost };
