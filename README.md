# React Markdown Renderer

> Renderiza archivos Markdown con frontmatter YAML, soporte para tablas, enlaces, imágenes y estilos modernos usando React, Vite, TypeScript y Tailwind CSS.

## Características

- Importa archivos `.md` como texto usando Vite (`?raw`).
- Extrae y muestra metadatos (frontmatter) con `front-matter`.
- Renderiza Markdown con [react-markdown](https://github.com/remarkjs/react-markdown) y [remark-gfm](https://github.com/remarkjs/remark-gfm) (tablas, listas de tareas, etc).
- Estilos modernos y responsivos con Tailwind CSS y la clase `prose`.
- Personalización de componentes Markdown (enlaces, imágenes, tablas, encabezados).
- Seguro: no permite HTML embebido ni ejecución de scripts.

## Instalación

```bash
npm install
```

## Uso

1. Coloca tus archivos Markdown en `src/components/markdowns/`.
2. Importe los archivos en tu componente:

```tsx
import markdown from "./components/markdowns/ejemplo.md?raw";
<MarkdownRenderer markdown={markdown} />
```

3. El frontmatter YAML se mostrará como título y metadatos.

## Ejemplo de Markdown soportado

```markdown
---
title: "Mi artículo"
autor: "Ariel"
fecha: "2025-07-24"
---

# Bienvenidos

Este Markdown incluye **negritas**, enlaces, tablas y más.

| Nombre  | Edad |
| ------- | ---- |
| Sundae  | 9    |
| Gandakl | 8    |

[Visitar OpenAI](https://openai.com)

![Imagen](/img/cervezas.jpg)
```

## Personalización de estilos

Las tablas, imágenes y enlaces usan clases de Tailwind CSS para un diseño atractivo. Puedes modificar los estilos en `MarkdownRenderer.tsx` según tus necesidades.

## Seguridad

- No se renderiza HTML crudo (no se usa `rehype-raw`).
- Los enlaces usan `rel="noopener noreferrer"` y `target="_blank"`.
- El id de los títulos se sanitiza.

## Créditos
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [front-matter](https://github.com/jxson/front-matter)
- [Tailwind CSS](https://tailwindcss.com/)
