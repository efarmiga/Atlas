# AGENTS.md: ATLAS COCKTAIL APP STANDARDS

This file defines the universal standards for all agents working on the "Atlas Cocktail Menu App."

## 🏛 PROJECT CONTEXT
- **Application:** Sophisticated mobile-first digital cocktail menu.
- **Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3. No frameworks.
- **Data:** `recipes.js` is the single source of truth for cocktail data.
- **Hosting:** GitHub Pages.

## 🛡 ARCHITECTURAL GUARDRAILS

### 1. Data Integrity
- **Single Source of Truth:** ALL recipes MUST originate from `recipes.js`.
- **Loading Pattern:** `script.js` must load data by setting `window.recipes = recipes;` as the first line.
- **Immutability:** The original `recipes` array must not be mutated.

### 2. Styling & Theming
- **Separation:** All CSS must be in `styles.css`. No inline styles or `<style>` blocks.
- **Admin Tool:** `menu_style.html` is the only mechanism for changing the live theme.

### 3. File Constraints
- **Entry Point:** `atlas_cocktail_menu.html`. Do NOT use `index.html`.
- **Naming:** Use `kebab-case` for recipe keys and `camelCase` for JS variables.

## 📋 AUDIT CHECKLIST
1. **Data Source:** Does the plan correctly modify `recipes.js` and nothing else for recipe data?
2. **Styling:** Does the plan attempt to add styles outside of `styles.css`?
3. **Paths:** Does the plan respect the lack of `index.html`?
4. **Consistency:** Does new recipe text match established formatting (oz, capitalization)?
