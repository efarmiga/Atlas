// Modal functionality for cocktail recipes

const modalOverlay = document.getElementById('recipe-modal-overlay');
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

        modalOverlay.style.display = 'flex';
        setTimeout(() => {
            modalOverlay.classList.add('active');
        }, 10);

    } catch (error) {
        console.error("An unexpected error occurred while showing the recipe modal:", error);
    }
}

function closeRecipeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 200);
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeRecipeModal();
    }
});