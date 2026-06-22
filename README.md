# Forbes Middle East News (Nuxt 3)

Production-style Forbes Middle East news assessment frontend built with Nuxt 3, Vue 3, Tailwind CSS, and Nitro APIs.

---

# Installation Instructions

## Prerequisites

* Node.js (LTS recommended)
* npm

## Setup

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# Project Structure Overview

The project follows a simple server-driven architecture where content is generated and stored in memory, exposed through Nitro API routes, and consumed by Nuxt pages.

## High-Level Data Flow

```text
Seed Data
    ↓
Article Generation
    ↓
In-Memory Store
    ↓
Nitro API Endpoints
    ↓
Nuxt Pages
```

### Content Pipeline

1. `server/data/articles.seed.ts`

   * Contains curated seed article data.

2. `server/data/generateArticles.ts`

   * Deterministically generates article inventories for each category.

3. `server/utils/articleStore.ts`

   * Builds and maintains the in-memory article store used by APIs.

4. Nitro API routes expose content:

```text
/api/homepage
/api/categories/[slug]
/api/articles/[slug]
```

5. Pages consume API responses using `useAsyncData`.

## Directory Structure

```text
app/
├── components/
│   ├── article/
│   ├── home/
│   ├── layout/
│   └── ui/
│       └── skeleton/
├── composables/
├── layouts/
├── pages/
├── assets/
│   └── css/
├── app.vue
└── error.vue

server/
├── api/
├── data/
└── utils/

types/
utils/
public/
└── images/
```

## Component Organization

### Article Components

Reusable editorial building blocks:

* Hero articles
* Feature cards
* Side cards
* Ticker items
* Thumbnail handling

### Home Components

Homepage-specific sections and content strips.

### Layout Components

Global application structure:

* Header
* Footer
* Background wrappers
* Dividers

### UI Components

Shared presentation utilities:

* Generic UI helpers
* Loading skeletons
* Shared interaction patterns

## Technology Stack

* Nuxt 3
* Vue 3
* Tailwind CSS
* Nitro Server APIs
* TypeScript
* `@nuxt/image`
* `@nuxtjs/color-mode`
* `@vueuse/nuxt`

---

# Assumptions Made During Development

## 1. Content Source Is Local

Content is generated from local seed files and stored in memory for simplicity, predictability, and ease of review.
I intentionally didn't use API integrations as it wasn't required for easier installation (no env keys required) 

## 2. In-Memory Storage Is Sufficient

Because this project focuses on frontend architecture and UI implementation rather than persistence, an in-memory store was chosen instead of introducing:

* Databases
* ORM layers
* External APIs

## 3. Deterministic Content Generation

Generated articles are intentionally deterministic so that:

* Development behavior remains predictable.
* UI layouts remain stable.
* Testing and review produce consistent results.

## 4. Local Images Are Preferred

Images are served from `public/images` instead of relying on third-party image providers.
They're the same images used in the Figma design for easier comparison and review between my project and the design.

Reasons:

* Picsum was down for more than 24 hours after I received the assessment
* Better reliability.
* No dependency on external services.
* Faster local development.
* Predictable rendering during assessment review.

## 5. Server APIs Simulate Production Behavior

Nitro API routes are used as an abstraction layer even though data is local.

This mirrors a production architecture where frontend pages consume backend APIs rather than directly importing content.

## 6. Reusability Over Page-Specific Components

Editorial card layouts are composed from reusable building blocks rather than creating separate implementations for each page section.

This reduces duplication and improves maintainability.

## 7. SSR-First Approach

The application assumes:

* Server-side rendering is the default rendering strategy.
* Pages should be SEO-friendly.
* Metadata should be available during initial page render.

## 8. Graceful Error Handling Is Expected

The application assumes invalid routes and unknown content should produce meaningful error pages:

* 404 for missing content.
* 500 for unexpected server failures.

A custom branded error page is provided to support both cases.

## 9. KISS Principle Takes Priority

Whenever multiple implementation options were available, preference was given to:

* Simpler architecture.
* Fewer abstractions.
* Minimal dependencies.
* Readable code.
* Predictable behavior.


## 10. Menu and Search Functionality

The menu and search interfaces were implemented as UI components only.

Functional implementations were intentionally omitted because the design specification did not define:

* The structure or content of the navigation menu.
* The expected search scope, data source, or filtering behavior.

Rather than making assumptions that could diverge from the intended requirements, only the visual components were implemented while keeping them ready for future integration.


The goal was to create a maintainable assessment project that resembles production practices without introducing unnecessary complexity.
