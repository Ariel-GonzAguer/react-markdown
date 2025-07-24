import MarkdownRenderer from "./components/MarkdownRenderer";

import astro from "./components/markdowns/astro.md?raw";
import react from "./components/markdowns/react.md?raw";
import jamStack from "./components/markdowns/jam-stack.md?raw";
import tailwind from "./components/markdowns/tailwind.md?raw";
import vercel from "./components/markdowns/vercel.md?raw";
import tabla from "./components/markdowns/tabla.md?raw";

const arrayMD = [astro, react, jamStack, tailwind, vercel, tabla];

export default function App() {
  return (
    <div>
      <h1>Markdown Renderer</h1>
      {arrayMD.map((markdown, index) => (
        <MarkdownRenderer key={index} markdown={markdown} />
      ))}
    </div>
  );
}
