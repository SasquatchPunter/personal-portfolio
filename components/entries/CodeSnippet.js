import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeSnippet({
  language,
  children,
  showLineNumbers,
  name,
}) {
  return (
    <div>
      {typeof name === "string" ? (
        <p className="bg-stone-700 italic p-2">{name}</p>
      ) : undefined}
      <SyntaxHighlighter
        style={obsidian}
        language={language}
        showLineNumbers={showLineNumbers}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
