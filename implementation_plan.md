# Plan: TCG-themed personal site

## Design
- Trading-card look: rounded card, foil border (gradient using `--accent`/`--accent-2`), inner art window, name bar, type/stat footer, holo shine on hover.
- Keep 3 language themes (`--accent`, `--glow`) — cards recolor per language.
- Pictures always inside a card art window (no bare images).

## Files

### [NEW] `src/lib/Card.svelte`
Reusable card shell. Props: `title`, `subtitle`, `badge` (corner label, e.g. HP/period), `art` (snippet or `label`/`src` for Placeholder), `rarity`. Children snippet = card body. Fixed aspect-ish width (~300px), holo hover.

### [NEW] `src/lib/CardStack.svelte`
Horizontal scroll-snap stack of `Card`s. Cards overlap slightly, active card scales up; prev/next buttons + dots; keyboard/touch swipe via native `overflow-x: auto; scroll-snap-type`. Props: `items`, `card` snippet. Used by Skills (one stack) and each timeline node.

### [MODIFY] `src/lib/Timeline.svelte`
Keep vertical rail + dot per node; add header slot (company/role/period) above content. Node content = `CardStack` of responsibility/achievement cards.

### [MODIFY] `src/lib/Experience.svelte`
Per job: timeline node header (logo-in-card chip, role, period, place, blurb) + `CardStack` with cards: Responsibilities (grouped points), Achievements (metric points), Tech stack (chips). Split `points` into `responsibilities` / `achievements` in content.

### [MODIFY] `src/lib/content.js`
Replace `points` with `responsibilities[]` and `achievements[]` per job (EN/SL/DE). Add `ui` labels: `responsibilities`, `achievements`, `stack`. Re-sort existing bullets (no new facts).

### [MODIFY] `src/lib/Skills.svelte`
Replace grid with one `CardStack` of skill cards (art = Placeholder in card art window, chips as body).

### [MODIFY] `src/lib/Education.svelte`
Timeline nodes with a single card each (logo in art window).

### [MODIFY] `src/lib/Hero.svelte`
Portrait placed inside a `Card` (art window = Placeholder + Rive overlay); stats as small card row.

### [MODIFY] `src/app.css`
Add card tokens (`--card-radius`, foil gradient, shadow), TCG-feel typography tweaks. Remove nothing else.

### [MODIFY] `src/App.svelte`
Languages bars → keep; minor style alignment only.

## Verify
1. `npm run build` passes.
2. `npm run dev`; Chrome MCP: screenshot desktop (1440) + mobile (390) for every section, all 3 languages.
3. Fix visual bugs found: overflow, clipped cards, snap misalignment, contrast, Rive 404 (`/rive/hero.riv`) console errors.

## Open points (default if no answer)
- Add `/rive/hero.riv` missing? Default: leave component, hide on load error.
- Real images? Default: placeholders stay inside card art windows.

**Awaiting approval.**
