/**
 * MarkdownRenderer.tsx
 *
 * ✅ Renderiza archivos Markdown con frontmatter (YAML) usando `front-matter`
 * ✅ Soporta imágenes, enlaces y tablas estilo GitHub
 *
 * 🔧 Instalar dependencias necesarias:
 *
 * npm install front-matter react-markdown remark-gfm
 *
 * 💡 Si usás TypeScript y Vite, añadí esto a vite-env.d.ts:
 *
 * declare module '*.md?raw' {
 *   const content: string
 *   export default content
 * }
 * 
 * Ejemplo de archivo .md compatible
---
title: "Ejemplo con front-matter"
autor: "Ariel"
fecha: "2025-07-24"
---

# Hola desde Markdown

Este archivo fue procesado con la librería `front-matter`.

[Visita OpenAI](https://openai.com)

<img src="/img/cervezas.jpg" alt="Cervezas" />

<div style="background: #eef; padding: 1rem; border-radius: 0.5rem;">
  Este es un bloque HTML embebido.
</div>


 */

import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface FrontmatterAttributes {
  title?: string;
  autor?: string;
  fecha?: string;
  [key: string]: unknown;
}

interface Props {
  markdown: string;
}

export default function MarkdownRenderer({ markdown }: Props) {
  // Parsear frontmatter
  const parsed = fm<FrontmatterAttributes>(markdown);

  // Extraer atributos y contenido
  const { attributes: data, body: content } = parsed;

  // Sanitizar el id para evitar inyecciones accidentales
  const safeId = typeof data.title === 'string'
    ? data.title.toLowerCase().replace(/[^a-z0-9-_]+/g, '-')
    : undefined;

  return (
    <article className="prose lg:prose-xl mx-auto p-4">
      <header className="mb-6 text-center text-red-600">
        {data.title && <h2 id={safeId}>{data.title}</h2>}
        {(data.autor || data.fecha) && (
          <p className="text-sm text-gray-500 italic">
            {data.autor && <>Por {data.autor}</>}
            {data.autor && data.fecha && " — "}
            {data.fecha && <>{data.fecha}</>}
          </p>
        )}
      </header>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => (
            <a
              {...props}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          img: (props) => (
            <img
              {...props}
              className="rounded shadow-md max-w-full mx-auto my-6 bg-slate-800"
            />
          ),
          h2: (props) => (
            <h2 {...props} className="text-2xl mt-8 mb-4 text-rose-700" />
          ),
          table: (props) => (
            <table {...props} className="min-w-full border border-gray-300 my-6 rounded shadow-md bg-white" />
          ),
          thead: (props) => (
            <thead {...props} className="bg-gray-100" />
          ),
          tbody: (props) => (
            <tbody {...props} className="divide-y divide-gray-200" />
          ),
          tr: (props) => (
            <tr {...props} className="hover:bg-gray-50" />
          ),
          th: (props) => (
            <th {...props} className="px-4 py-2 border-b font-semibold text-left" />
          ),
          td: (props) => (
            <td {...props} className="px-4 py-2 border-b" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
