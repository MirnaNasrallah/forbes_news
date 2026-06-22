# Forbes Middle East News (Nuxt 3)

Production-style Forbes Middle East news assessment frontend built with Nuxt 3, Vue 3, Tailwind, and Nitro APIs.

## Implementation Spirit

This codebase is intentionally designed around:

- **Simple data flow:** seed data -> server store -> API routes -> page `useAsyncData`.
- **Reusable UI blocks:** article and section components are composed rather than duplicated.
- **Predictable behavior:** typed payloads, deterministic article generation, consistent fallback logic.
- **Design consistency:** shared palette, typography, spacing, and card patterns inspired by Forbes editorial layouts.
- **Minimalism (KISS):** local assets over fragile remote dependencies, few composables, no heavy global state.

## Stack

- Nuxt 3
- Vue 3
- Tailwind CSS
- `@nuxt/image`
- `@nuxtjs/color-mode`
- `@vueuse/nuxt`
- Nitro server APIs

## Architecture

### Data Flow

1. `server/data/articles.seed.ts` defines curated seed content.
2. `server/data/generateArticles.ts` fills category inventories deterministically.
3. `server/utils/articleStore.ts` builds in-memory payloads and ordering.
4. Nitro APIs expose payloads:
   - `/api/homepage`
   - `/api/categories/[slug]`
   - `/api/articles/[slug]`
5. Pages consume via `useAsyncData` and render typed responses.

### Folder Structure

```
app/
  components/
    article/        # cards, thumbnail, hero, side/ticker/article-level blocks
    home/           # homepage sections and strips
    layout/         # header/footer/background/divider
    ui/             # generic UI helpers
      skeleton/     # loading skeleton components
    ForbesLogo.vue
  composables/
  layouts/
  pages/
  assets/css/
  error.vue
  app.vue
server/
  api/
  data/
  utils/
types/
utils/
```

## Design System

- **Typography:** Inter via `@nuxt/fonts`
- **Core colors:** `forbes-red`, `forbes-dark`, `forbes-bg`
- **Dark mode:** color tokens driven by CSS variables and `@nuxtjs/color-mode`
- **Layout signatures:** floating homepage card, editorial section headers, reusable card image framing

## Production Readiness

- SSR-first Nuxt architecture
- Strict TypeScript and shared response types
- Controlled API error handling for 404 and 500 states
- Custom branded `app/error.vue`
- Skeleton loading states for homepage/category/article pages
- SEO metadata on pages
- Thumbnail fallback chain and resilient local image strategy

## Reusability Patterns

- `ArticleThumbnail` centralizes image loading, source fallback, dimensions, and fit behavior.
- Feature/side/ticker/article cards are composable units reused across sections.
- `#types` and `#utils` aliases keep imports stable and explicit.
- `SectionTitle`, `ActionLink`, and skeleton components reduce repeat markup.

## Thumbnail Strategy

Primary runtime assets are local images under `public/images`.  
Each thumbnail entry includes a commented Picsum fallback URL with:

`TODO: return to the picsum after the website goes back up`

This keeps the current implementation stable while preserving a documented recovery path.

## Non-200 Handling

- Invalid routes and unknown slugs surface 404.
- Server/data failures surface 500.
- `app/error.vue` renders branded views for both classes.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Environment and Deployment Notes

- No required runtime env vars for local content mode.
- Works with standard Nuxt Node deployments (`nuxt build` + `nuxt preview`/Node server).
- Static assets are served from `public/images`.

## KISS Tradeoffs

- Local thumbnails are preferred over external CDNs to avoid network instability.
- In-memory article store is intentionally simple for this implementation scope.
- Components are grouped by domain and kept flat within domain folders for maintainability.
