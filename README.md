# Etarnity Image Compressor

A fast, client-side image compression tool built with Next.js and TypeScript. Compress images directly in the browser without uploading to any server — ensuring privacy, speed, and ease of use.

## Overview

Etarnity Image Compressor is a web-based utility that allows users to compress images directly in the browser using the `browser-image-compression` library. No files are uploaded to any server, making it completely private and secure. Users can adjust compression quality, see before/after file size comparisons, and download the optimized images instantly. The application features a clean, responsive interface built with Tailwind CSS 4.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Image Compression | browser-image-compression |

## Core Features

- **Client-Side Compression** — All image processing happens in the browser, no server upload required
- **Privacy First** — Your images never leave your device, ensuring complete data privacy
- **Quality Control** — Adjust compression quality to balance between file size and image clarity
- **Before/After Comparison** — See original and compressed file sizes side by side
- **Batch Processing** — Compress multiple images at once
- **Instant Download** — Download compressed images immediately after processing
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices

## Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.1 | React framework with App Router |
| `react` | 19.2.4 | UI library |
| `react-dom` | 19.2.4 | React DOM renderer |
| `browser-image-compression` | 2.0.2 | Client-side image compression |

### Development

| Package | Purpose |
|---------|---------|
| `typescript` (^5) | TypeScript language support |
| `@types/node` (^20) | Node.js type definitions |
| `@types/react` (^19) | React type definitions |
| `@types/react-dom` (^19) | React DOM type definitions |
| `tailwindcss` (^4) | Utility-first CSS framework |
| `@tailwindcss/postcss` (^4) | PostCSS plugin for Tailwind |
| `eslint` (^9) | Code linting |
| `eslint-config-next` (16.2.1) | ESLint config for Next.js |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm / yarn / pnpm / bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abrar12678/etarnity-image-compressor.git
cd etarnity-image-compressor

# 2. Install dependencies
npm install
```

### Run Locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the tool.

### Build for Production

```bash
npm run build
npm start
```

## Live Demo

Try the tool live: [etarnity-image-compressor.vercel.app](https://etarnity-image-compressor.vercel.app)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [browser-image-compression Documentation](https://github.com/Donaldcwl/browser-image-compression)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
</p>