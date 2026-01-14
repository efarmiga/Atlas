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
const drinkCards = Array.from(document.querySelectorAll('.drink-card'));

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

    drinkCards.forEach(card => {
        const drinkId = card.getAttribute('onclick').match(/'([^']*)'/)[1];
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


// --- 3. GLOBAL EVENT LISTENERS & INITIALIZATION --- //

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