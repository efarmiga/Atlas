# Atlas Cocktail Menu App

## Project Description

This project is a web application that displays a menu of cocktails. The application is designed to be a simple, elegant, and user-friendly way to browse and view cocktail recipes. It is a single-page application that dynamically loads recipe information and allows for theme customization.

- **Live App URL:** [https://efarmiga.github.io/Atlas/atlas_cocktail_menu.html](https://efarmiga.github.io/Atlas/atlas_cocktail_menu.html)
- **Theme Selector:** [https://efarmiga.github.io/Atlas/menu_style.html](https://efarmiga.github.io/Atlas/menu_style.html)

## Features

- **Interactive Menu:** Cocktails are organized into two categories: "Creations" and "Classics."
- **Recipe Modals:** Clicking on a cocktail opens a modal window that displays the ingredients, method, and serving instructions.
- **Ingredient Filtering:** Users can filter the menu to show only cocktails containing specific key ingredients.
- **Customizable Themes:** The visual theme of the menu can be changed using a separate theme selector page. Themes include "Light," "Dark," and "Holiday."
- **Dynamic Theme Loading:** The selected theme is saved to and loaded from a remote JSONBin.io store, allowing the theme to persist across sessions.
- **Mobile-Friendly Design:** The application is designed to be responsive and work well on mobile devices.

## App Architecture

The application is built with HTML, CSS, and JavaScript. Here is a breakdown of the key files:

- **`atlas_cocktail_menu.html`:** The main HTML file for the application. It contains the structure of the menu and the recipe modal.
- **`script.js`:** This file contains the JavaScript for the recipe modal, filtering logic, and theme handling.
- **`recipes.js`:** This file contains the `recipes` object, which is a JavaScript object that stores all the cocktail recipes.
- **`key_ingredients.json`:** This file lists the ingredients that appear in the filter modal.
- **`styles.css`:** This file contains the custom CSS for the application, including the styles for the different themes.
- **`menu_style.html`:** A separate HTML file that provides a user interface for selecting and saving a theme.

## How to Add a New Cocktail Recipe

Adding a new cocktail involves two simple steps: adding the recipe data and creating the menu card in the HTML.

### Step 1: Add the Recipe to `recipes.js`

Open the `recipes.js` file and add a new entry to the `recipes` object. The key must be a unique, lowercase, hyphenated string. This key is crucial as it links the HTML card to the recipe data.

Use this template for the new recipe:

```javascript
'unique-drink-id': {
    name: "Name of Your Drink",
    ingredients: [
        "2 oz Main Spirit",
        "1 oz Liqueur",
        "0.75 oz Citrus Juice"
    ],
    method: "Combine all ingredients in a shaker with ice and shake well.",
    serve: "Strain into a chilled coupe glass. Garnish with a citrus twist."
},
```

### Step 2: Add the Drink Card to `atlas_cocktail_menu.html`

Open `atlas_cocktail_menu.html` and decide whether the drink is a "Creation" or a "Classic." Add the new HTML block in the appropriate section.

The `onclick` attribute **must** use the exact same unique key you created in `recipes.js`.

Use this template for the new drink card:

```html
<!-- Drink Name -->
<div class="drink-card p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm cursor-pointer transition duration-150" onclick="showRecipeModal('unique-drink-id')">
    <h3 class="drink-name text-xl font-medium mb-1">Name of Your Drink</h3>
    <p class="text-sm italic accent-text mb-2">main spirit, liqueur, citrus</p>
    <p class="drink-description text-xs font-medium">A short, enticing description of the drink's flavor profile and serve style.</p>
</div>
```

### Step 3: (Optional) Update Filterable Ingredients

If your new recipe includes a key ingredient that you want users to be able to filter by, add it to the `ingredients` array in `key_ingredients.json`.

```json
{
  "ingredients": [
    "bourbon",
    "campari",
    "gin",
    "new ingredient"
  ]
}
```

That's it! The script will handle the rest. There is no need to manually update script versions.

## How to Use the Local Repo (if needed - IDX preferred)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/efarmiga/Atlas
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Atlas
    ```

3.  **Start a local web server:**
    ```bash
    python3 -m http.server 8000
    ```

4.  **View the application in your browser:**
    [http://localhost:8000/atlas_cocktail_menu.html](http://localhost:8000/atlas_cocktail_menu.html)

## IDX Environment

This project is configured to run in a Google IDX environment. The `.idx/dev.nix` file sets up the necessary environment with Python for running a local server.

To learn more about customizing your IDX environment, see the [IDX documentation](https://developers.google.com/idx/guides/customize-idx-env).