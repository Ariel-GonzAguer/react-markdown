import MarkdownRenderer from "./components/MarkdownRenderer";

import { useContentCollection } from "../src/content/collection";

import ContentList from "./components/ContentList";

export default function App() {
  const arrayCollection = useContentCollection();
  return (
    <div>
      <h1>Markdown Renderer</h1>
      <ContentList />
      {arrayCollection.map((item, index) => (
        <MarkdownRenderer key={index} markdown={item.markdown} />
      ))}
    </div>
  );
}
