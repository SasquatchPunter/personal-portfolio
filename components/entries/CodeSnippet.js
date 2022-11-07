import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeSnippet({ language, children }) {
  return (
    <SyntaxHighlighter style={obsidian} language={language}>
      {children}
    </SyntaxHighlighter>
  );
}
