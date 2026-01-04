# Atlas Cocktail Menu App

## Project Description

This project is a web application that displays a menu of cocktails. The application is designed to be a simple, elegant, and user-friendly way to browse and view cocktail recipes. It is a single-page application that dynamically loads recipe information and allows for theme customization.

- **Live App URL:** [https://efarmiga.github.io/Atlas/atlas_cocktail_menu.html](https://efarmiga.github.io/Atlas/atlas_cocktail_menu.html)
- **Theme Selector:** [https://efarmiga.github.io/Atlas/menu_style.html](https://efarmiga.github.io/Atlas/menu_style.html)

## Features

- **Interactive Menu:** Cocktails are organized into two categories: "Creations" and "Classics."
- **Recipe Modals:** Clicking on a cocktail opens a modal window that displays the ingredients, method, and serving instructions.
- **Customizable Themes:** The visual theme of the menu can be changed using a separate theme selector page. Themes include "Light," "Dark," and "Holiday."
- **Dynamic Theme Loading:** The selected theme is saved to and loaded from a remote JSONBin.io store, allowing the theme to persist across sessions.
- **Mobile-Friendly Design:** The application is designed to be responsive and work well on mobile devices.

## App Architecture

The application is built with HTML, CSS, and JavaScript. Here is a breakdown of the key files:

- **`atlas_cocktail_menu.html`:** The main HTML file for the application. It contains the structure of the menu and the recipe modal.
- **`script.js`:** This file contains the JavaScript for the recipe modal. It handles showing and hiding the modal, and dynamically populating it with recipe data.
- **`recipes.js`:** This file contains the `recipes` object, which is a JavaScript object that stores all the cocktail recipes.
- **`styles.css`:** This file contains the custom CSS for the application, including the styles for the different themes.
- **`menu_style.html`:** A separate HTML file that provides a user interface for selecting and saving a theme.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **JSONBin.io:** A free JSON hosting service used to store and retrieve the selected theme.

## How to Use the Local Repo

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

## Development

### Cache-Busting for JavaScript Files

To ensure that browsers always load the latest version of the application's scripts, a cache-busting technique is used. The `script` tags in `atlas_cocktail_menu.html` include a version query string, like so:

```html
<!-- Load Recipe Data -->
<script src="recipes.js?v=1.2" defer></script>
<!-- Load Main Script -->
<script src="script.js?v=1.2" defer></script>
```

When making changes to `recipes.js` or `script.js`, it is crucial to increment the version number in this query string (e.g., from `v=1.2` to `v=1.3`). This forces the browser to download the new file, preventing issues where outdated, cached files might cause errors.

This is especially important when:
- Adding or removing recipes.
- Changing recipe keys (the unique identifiers for each drink).
- Modifying the logic in `script.js`.

## IDX Environment

This project is configured to run in a Google IDX environment. The `.idx/dev.nix` file sets up the necessary environment with Python for running a local server.

To learn more about customizing your IDX environment, see the [IDX documentation](https://developers.google.com/idx/guides/customize-idx-env).

## Future Plans

- **Index Page:** Create an `index.html` file to serve as a landing page for the project, especially if more pages are added in the future.
- **Refactor Theme Handling:** The theme is currently managed through a separate page and relies on a third-party service. This could be refactored to be more self-contained, perhaps using local storage or a backend service.
- **Add More Cocktails:** The `recipes.js` file can be easily updated with new cocktail recipes.
