window.recipes = recipes;

// --- 1. RECIPE MODAL --- //

const recipeModalOverlay = document.getElementById('recipe-modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalIngredients = document.getElementById('modal-ingredients');
const modalMethod = document.getElementById('modal-method');
const modalServe = document.getElementById('modal-serve');

function showRecipeModal(drinkId) {
    try {
        const recipe = recipes[drinkId];
        if (!recipe) {
            console.error(`Recipe data not found for ID: ${drinkId}`);
            modalTitle.textContent = "Recipe Not Found";
            modalIngredients.innerHTML = `<li class="text-red-600 list-disc ml-4">Could not load the recipe details.</li>`;
            modalMethod.textContent = "Please try selecting another drink.";
            modalServe.textContent = "";
        } else {
            modalTitle.textContent = recipe.name;
            modalIngredients.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = 'list-disc ml-4 font-normal'; 
                li.textContent = ingredient;
                modalIngredients.appendChild(li);
            });
            modalMethod.textContent = recipe.method;
            modalServe.textContent = recipe.serve;
        }

        recipeModalOverlay.style.display = 'flex';
        setTimeout(() => {
            recipeModalOverlay.classList.add('active');
        }, 10);

    } catch (error) {
        console.error("An unexpected error occurred while showing the recipe modal:", error);
    }
}

function closeRecipeModal() {
    recipeModalOverlay.classList.remove('active');
    setTimeout(() => {
        recipeModalOverlay.style.display = 'none';
    }, 200);
}

// --- 2. INGREDIENT FILTER MODAL --- //

const filterModalOverlay = document.getElementById('filter-modal-overlay');
const filterOptions = document.getElementById('filter-options');
const filterIcon = document.getElementById('filter-icon');

// Populate the filter modal with checkboxes from a JSON file
async function populateFilterOptions() {
    // Only populate if it hasnt been done already
    if (filterOptions.childElementCount > 0) return;

    try {
        const response = await fetch('key_ingredients.json');
        const data = await response.json();
        const ingredients = data.ingredients.sort();

        ingredients.forEach(ingredient => {
            const label = document.createElement('label');
            label.className = 'flex items-center space-x-3 text-lg cursor-pointer';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = ingredient.toLowerCase(); // Use lowercase for matching
            checkbox.className = 'hidden'; // Hide default checkbox

            const customCheckbox = document.createElement('span');
            customCheckbox.className = 'custom-checkbox';

            const text = document.createElement('span');
            text.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);

            label.appendChild(checkbox);
            label.appendChild(customCheckbox);
            label.appendChild(text);
            filterOptions.appendChild(label);
        });
    } catch (error) {
        console.error('Error loading key ingredients:', error);
        filterOptions.innerHTML = '<p class="text-red-500">Could not load filter options.</p>';
    }
}

function openFilterModal() {
    populateFilterOptions();
    filterModalOverlay.style.display = 'flex';
    setTimeout(() => {
        filterModalOverlay.classList.add('active');
    }, 10);
}

function closeFilterModal() {
    filterModalOverlay.classList.remove('active');
    setTimeout(() => {
        filterModalOverlay.style.display = 'none';
    }, 200);
}

function applyFilters() {
    const selectedIngredients = Array.from(filterOptions.querySelectorAll('input:checked')).map(input => input.value);
    const drinkCards = document.querySelectorAll('.drink-card');

    drinkCards.forEach(card => {
        const drinkId = card.getAttribute('onclick').match(/'([^^']*)'/)[1];
        const recipe = recipes[drinkId];
        
        if (recipe) {
            const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
            
            // Show if no ingredients are selected, OR if at least one selected ingredient is present
            const hasAtLeastOneIngredient = selectedIngredients.length === 0 || selectedIngredients.some(selIng => 
                recipeIngredients.some(recIng => recIng.includes(selIng))
            );

            if (hasAtLeastOneIngredient) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    if (selectedIngredients.length > 0) {
        filterIcon.classList.add('filter-active');
    } else {
        filterIcon.classList.remove('filter-active');
    }

    closeFilterModal();
}

function clearAllFilters() {
    filterOptions.querySelectorAll('input:checked').forEach(input => input.checked = false);
    applyFilters();
}

// --- 3. DYNAMIC MENU RENDERING --- //
function renderMenu() {
    const creationsContainer = document.getElementById('creations-container');
    const classicsContainer = document.getElementById('classics-container');
    
    // Clear existing content
    creationsContainer.innerHTML = '';
    classicsContainer.innerHTML = '';

    for (const drinkId in recipes) {
        const recipe = recipes[drinkId];
        const container = recipe.category === 'creations' ? creationsContainer : classicsContainer;

        const cardHTML = `
            <div class="drink-card p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm cursor-pointer transition duration-150" onclick="showRecipeModal('${drinkId}')">
                <h3 class="drink-name text-xl font-medium mb-1">${recipe.name}</h3>
                <p class="text-sm italic accent-text mb-2">${recipe.cardIngredients}</p>
                <p class="drink-description text-xs font-medium">${recipe.description}</p>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    }
    
    // Re-trigger SVG icon injection after cards are rendered
    injectGlassIcons();
}

function injectGlassIcons() {
    const svgIcons = {
        martini: '<path d="M2 3h20L12 13V21M9 21h6" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        coupe: '<path d="M3 3c0 7 18 7 18 0M12 10v11M9 21h6" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        flute: '<path d="M8 3v9c0 2 1.5 3 4 3s4-1 4-3V3M12 15v6M9 21h6" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        lowball: '<path d="M5 3v15c0 1.5 1 2.5 2.5 2.5h9c1.5 0 2.5-1 2.5-2.5V3" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="8.5" y="11.5" width="7" height="7" rx="1.2" stroke="currentColor" fill="none" stroke-width="1.2" transform="rotate(-4 12 15)"/>',
        highball: '<path d="M7 3v16c0 1 1 2 2 2h6c1 0 2-1 2-2V3" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="15" width="4" height="4" rx="0.5" stroke="currentColor" fill="none" stroke-width="1"/><rect x="9" y="10" width="4" height="4" rx="0.5" stroke="currentColor" fill="none" stroke-width="1" transform="rotate(10 11 12)"/><rect x="11" y="6" width="4" height="4" rx="0.5" stroke="currentColor" fill="none" stroke-width="1" transform="rotate(-15 13 8)"/>'
    };

    document.querySelectorAll('.drink-card').forEach(card => {
        const onclickAttr = card.getAttribute('onclick');
        if (!onclickAttr) return;

        const match = onclickAttr.match(/'([^^']*)'/);
        if (match && recipes[match[1]]) {
            const recipe = recipes[match[1]];
            const glassType = recipe.glass || 'martini';
            const targetContainer = card.querySelector('.drink-description');

            if (targetContainer) {
                // Check if an icon already exists
                if (targetContainer.querySelector('svg')) {
                    return; 
                }

                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("viewBox", "0 0 24 24");
                svg.setAttribute("class", "w-4 h-4 inline-block mr-2 align-text-bottom opacity-90");
                svg.innerHTML = svgIcons[glassType] || svgIcons.martini;
                
                targetContainer.prepend(svg);
            }
        }
    });
}


// --- 4. GLOBAL EVENT LISTENERS & INITIALIZATION --- //

function initializeApp() {
    console.log("Initializing App...");
    // Check if recipes object exists
    if (typeof recipes !== 'undefined' && Object.keys(recipes).length > 0) {
        renderMenu();
    } else {
        console.error("Recipes data not found. Retrying in 100ms...");
        setTimeout(initializeApp, 100); // Retry once if recipes.js is slow
    }
}

// Use 'load' instead of 'DOMContentLoaded' to ensure all deferred scripts are ready
window.addEventListener('load', initializeApp);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (recipeModalOverlay.classList.contains('active')) {
            closeRecipeModal();
        }
        if (filterModalOverlay.classList.contains('active')) {
            closeFilterModal();
        }
    }
});
