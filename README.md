# Atlas Cocktail Menu App

## Project Description

This project is a dynamic, single-page web application that displays a menu of cocktails. The application is designed to be a simple, elegant, and user-friendly way to browse recipes. It is built with a data-driven approach, where all cocktail information is stored in a central JavaScript object and rendered dynamically at runtime.

- **Live App URL:** [https://efarmiga.github.io/Atlas/atlas_cocktail_menu.html](https://efarmiga.github.io/Atlas/atlas_cocktail_menu.html)
- **Theme Selector Tool:** [https://efarmiga.github.io/Atlas/menu_style.html](https://efarmiga.github.io/Atlas/menu_style.html)

## Features

- **Dynamic Menu:** Cocktails are rendered dynamically from a central data source and organized into "Creations" and "Classics."
- **Recipe Modals:** Clicking a cocktail opens a modal with detailed ingredients, method, and serving instructions.
- **Ingredient Filtering:** Users can filter the menu to show only cocktails containing specific key ingredients.
- **Curated Themes:** The visual theme of the menu is curated and can be set for all users (e.g., for seasonal changes).
- **Persistent Theme:** The selected theme is saved to a remote JSON store, ensuring it persists across all user sessions.
- **Mobile-First Design:** The application is fully responsive and optimized for a seamless experience on mobile devices.

## Technical Architecture

The application follows a modern, data-driven architecture that separates content, presentation, and logic.

- **`atlas_cocktail_menu.html` (The Structure):** The main HTML file that provides the basic structure of the page. It contains empty containers (`<div id="creations-container">` and `<div id="classics-container">`) which are populated by the script at runtime.
- **`recipes.js` (The Data):** This file is the **single source of truth** for all cocktail data. It contains a single JavaScript object (`recipes`) where each cocktail is an entry with properties like name, ingredients, category, and description.
- **`script.js` (The Logic):** This file contains all the application logic. The `renderMenu()` function reads the data from `recipes.js` and dynamically builds and injects the HTML for each cocktail card into the main page when it loads. It also handles the recipe modals and filtering functionality.
- **`styles.css` (The Style Definitions):** This file contains all the theme definitions for the application (e.g., `theme-light`, `theme-dark`). New themes or style modifications should be made here.
- **`menu_style.html` (The Theme Selector):** A separate utility page for **setting the active theme** for all users. It presents the themes defined in `styles.css` and saves the selected theme ID to the remote JSONBin.io store.
- **`key_ingredients.json`:** A simple JSON file that lists the ingredients used to populate the filter modal.

## How to Add a New Cocktail Recipe

The new dynamic architecture makes adding a recipe incredibly simple. **You only need to edit one file.**

### Step 1: Add the Recipe to `recipes.js`

Open the `recipes.js` file and add a new entry to the `recipes` object. The key must be a unique, lowercase, hyphenated string (e.g., `new-york-sour`). This key is used for internal linking.

Use this template for the new recipe, filling in all properties:

```javascript
'unique-drink-id': {
    name: "Name of Your Drink",
    category: "creations", // or "classics"
    cardIngredients: "A short, lowercase list for the menu card, e.g., rye, red wine, lemon",
    description: "A brief, enticing description of the drink.",
    glass: "coupe", // (martini, coupe, flute, lowball, highball)
    ingredients: [
        "2 oz Main Spirit",
        "1 oz Liqueur",
        "0.75 oz Citrus Juice"
    ],
    method: "Combine all ingredients in a shaker with ice and shake well.",
    serve: "Strain into a chilled coupe glass. Garnish with a citrus twist."
},
```

That's it! The `renderMenu` function in `script.js` will automatically detect the new data and render the drink card on the menu the next time the page loads. There is no need to write any HTML.

### Step 2: (Optional) Update Filterable Ingredients

If your new recipe includes a key ingredient that you want users to be able to filter by (and it's not already listed), add it to the `ingredients` array in `key_ingredients.json`.

## How to Change the Live Theme

The application's live theme (e.g., for seasonal updates) is managed through a simple, two-step process. This allows for centralized control over the user-facing appearance.

### Step 1: (If necessary) Define a New Theme

If you need to create a new theme (e.g., a "Holiday" theme), open `styles.css` and define the new styles using a unique class, like `.theme-holiday`. You can model it after the existing `.theme-light` or `.theme-dark` classes.

### Step 2: Set the Active Theme

1.  **Open the Selector:** Open `menu_style.html` in your browser.
2.  **Choose the Theme:** The page will display buttons for each theme defined in `styles.css`. Click the button for the theme you want to make live.
3.  **Confirm:** The script will automatically save your selection to the remote JSONBin.io store. The main menu will then load this theme for all users.

This process ensures that styling is consistent and centrally managed. Avoid making one-off style changes in the main HTML file.

## Local Development

1.  **Clone the repository:** `git clone https://github.com/efarmiga/Atlas`
2.  **Navigate to the directory:** `cd Atlas`
3.  **Start a local server:** `python3 -m http.server 8000`
4.  **View the app:** `http://localhost:8000/atlas_cocktail_menu.html`
