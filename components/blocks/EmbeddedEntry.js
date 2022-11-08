import CodeSnippet from "../entries/CodeSnippet";

export default function EmbeddedEntry({ entry }) {
  const type = entry.__typename;

  switch (type) {
    case "CodeSnippet":
      return (
        <CodeSnippet
          language={entry.language}
          name={entry.name}
          showLineNumbers={entry.showLineNumbers}
        >
          {entry.body}
        </CodeSnippet>
      );
    default:
      return undefined;
  }
}
