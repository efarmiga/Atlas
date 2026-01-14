// Recipe data for all cocktails
const recipes = {
    // CREATIONS
    'capri-75': {
        name: "Capri 75",
        category: "creations",
        cardIngredients: "gin, limoncello, prosecco",
        description: "sparkling Amalfi coast spritz, in a flute with a lemon twist",
        glass: "flute",
        ingredients: [
            "1 oz gin",
            "0.75 oz Limoncello",
            "Top with Prosecco"
        ],
        method: "Combine gin and limoncello in a shaker with ice and shake briefly.",
        serve: "Strain into a chilled champagne flute. Top with chilled Prosecco. Garnish with a long lemon twist."
    },
    'caribbean-garibaldi': {
        name: "Caribbean Garibaldi",
        category: "creations",
        cardIngredients: "chinola, campari, fresh orange juice",
        description: "the Italian classic on a tropical vacation, over ice in a highball",
        glass: "highball",
        ingredients: [
            "1 oz Chinola (passionfruit liqueur)",
            "1 oz Campari",
            "3 oz Fresh orange juice"
        ],
        method: "Build directly in the glass. Add Campari, Chinola, and orange juice.",
        serve: "Pour into a highball glass over fresh ice and stir gently. Garnish with an orange slice."
    },
    'tokyo-martini': {
        name: "Tokyo Martini",
        category: "creations",
        cardIngredients: "gin, rhubarb-ginger liqueur, lillet blanc",
        description: "gin meets ginger, served up or on a large rock",
        glass: "martini",
        ingredients: [
            "1.5 oz gin",
            "1.5 oz rhubarb-ginger liqueur",
            "0.75 oz lillet blanc"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a chilled martini glass or over a large ice cube in a lowball glass. Garnish with an orange twist."
    },
    'nordic-vesper': {
        name: "Nordic Vesper",
        category: "creations",
        cardIngredients: "gin, lillet blanc, elderflower liqueur, optional blueberry",
        description: "Bond's iconic vesper with a floral twist, served up (specify clear or blueberry)",
        glass: "martini",
        ingredients: [
            "2 oz gin",
            "1 oz lillet blanc",
            "0.5 oz elderflower liqueur",
            "Optional: Add a few blueberries to the shaker for color and flavor."
        ],
        method: "Combine ingredients in a shaker with ice and shake vigorously until well-chilled.",
        serve: "Strain into a chilled martini glass. Garnish with lavender (clear version) or blueberries (blueberry version)."
    },
    'bordeaux-rose': {
        name: "Bordeaux Rose",
        category: "creations",
        cardIngredients: "gin, lillet blanc, rhubarb-ginger liqueur, muddled strawberry",
        description: "strawberry fields of France, served up",
        glass: "coupe",
        ingredients: [
            "2 strawberries, muddled",
            "1.5 oz gin",
            "0.75 oz lillet blanc",
            "0.75 oz rhubarb-ginger liqueur"
        ],
        method: "Muddle strawberries in the shaker. Add remaining ingredients and ice. Shake well.",
        serve: "Double strain into a chilled coupe. Garnish with a strawberry."
    },
    'key-west-gimlet': {
        name: "Key West Gimlet",
        category: "creations",
        cardIngredients: "gin, coconut rum, key lime juice, muddled mint",
        description: "beat the Florida heat with this tart and minty treat, on the rocks",
        glass: "lowball",
        ingredients: [
            "2 oz gin",
            "1 oz coconut rum",
            "0.5 oz key lime juice (juice from one key lime)",
            "4 mint leaves"
        ],
        method: "Muddle mint leaves gently. Add all other ingredients and ice to a shaker. Shake well.",
        serve: "Strain into a lowball glass over fresh ice. Garnish with a mint sprig and key lime slice."
    },
    'atlantic-crossing': {
        name: "Atlantic Crossing",
        category: "creations",
        cardIngredients: "bourbon, cinzano, rhubarb-ginger liqueur",
        description: "Ellis Island mix of transatlantic spirits, over a large rock with cherry",
        glass: "lowball",
        ingredients: [
            "1.5 oz bourbon",
            "1.5 oz cinzano vermouth",
            "0.75 oz rhubarb-ginger liqueur"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a lowball glass over a large rock. Garnish with a cherry."
    },
    'westchester': {
        name: "Westchester",
        category: "creations",
        cardIngredients: "bourbon, sweet vermouth, bing cherry juice",
        description: "Manhattan's smoother, richer cousin, over a large rock with cherry",
        glass: "lowball",
        ingredients: [
            "1.5 oz bourbon",
            "1.5 oz sweet vermouth",
            "0.5 oz bing cherry juice"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a lowball glass over a large rock. Garnish with 2-3 bing cherries."
    },
    'kyoto-bloom': {
        name: "Kyoto Bloom",
        category: "creations",
        cardIngredients: "gin, sake, elderflower liqueur",
        description: "clean & floral zen garden saketini, served up",
        glass: "coupe",
        ingredients: [
            "1.5 oz gin",
            "1.5 oz sake",
            "0.25 oz elderflower liqueur"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a chilled coupe or martini glass. Garnish with a lemon twist."
    },
    
    // CLASSICS
    'parisian-boulevardier': {
        name: "Paris Boulevardier",
        category: "classics",
        cardIngredients: "bourbon, campari, sweet vermouth",
        description: "sophisticated Parisian evening, served up or on a large rock with orange twist",
        glass: "coupe",
        ingredients: [
            "1.5 oz bourbon",
            "1.5 oz campari",
            "1.5 oz sweet vermouth"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a chilled coupe or a lowball glass over a large rock. Garnish with an orange twist."
    },
    'san-juan-cafe-con-ron': {
        name: "San Juan Café con Ron",
        category: "classics",
        cardIngredients: "espresso, Don Q Cristal rum, kahlua, coconut syrup",
        description: "a Puerto Rican tradition, shaken and served up",
        glass: "martini",
        ingredients: [
            "1 double shot of espresso, chilled",
            "2 oz rum",
            "1.5 oz Kahlua",
            "1 oz coconut syrup*"
        ],
        method: "Combine all ingredients in a shaker with ice and shake vigorously until well-chilled. *To make coconut syrup: use equal parts shredded coconut, water, and sugar; toast coconut in pot until lightly browned; add water and sugar; simmer to thicken.",
        serve: "Strain into a chilled martini glass. Garnish with three espresso beans."
    },
    'new-england-old-fashioned': {
        name: "New England Old Fashioned",
        category: "classics",
        cardIngredients: "bourbon, maple syrup, chocolate and walnut bitters",
        description: "maple syrup makes everything better, over a large rock with orange twist",
        glass: "lowball",
        ingredients: [
            "2 oz bourbon",
            "0.25 oz maple syrup",
            "3 dashes chocolate and walnut bitters"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain or build in a lowball glass over a large rock. Garnish with an orange twist."
    },
    'broadway-manhattan': {
        name: "Broadway Manhattan",
        category: "classics",
        cardIngredients: "bourbon, sweet vermouth, aromatic bitters",
        description: "timeless NYC classic, served up with cherry",
        glass: "coupe",
        ingredients: [
            "2 oz bourbon",
            "1 oz sweet vermouth",
            "2 dashes aromatic bitters"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a chilled coupe. Garnish with a cherry."
    },
    'san-francisco-martinez': {
        name: "San Francisco Martinez",
        category: "classics",
        cardIngredients: "gin, sweet vermouth, bing cherry juice",
        description: "original Fog City cocktail with a hint of cherry, served up with lemon zest",
        glass: "martini",
        ingredients: [
            "1.5 oz gin",
            "1.5 oz sweet vermouth",
            "0.25 oz bing cherry juice",
            "1 dash aromatic bitters"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a chilled martini glass. Garnish with a lemon zest."
    },
    'florence-negroni': {
        name: "Florentine Negroni",
        category: "classics",
        cardIngredients: "gin, campari, sweet vermouth",
        description: "iconic Italian aperitivo, over a large rock with orange twist",
        glass: "lowball",
        ingredients: [
            "1 oz gin",
            "1 oz campari",
            "1 oz sweet vermouth"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain or build in a lowball glass over a large rock. Garnish with an orange twist."
    },
    'vienna-velvet': {
        name: "Vienna Velvet",
        category: "classics",
        cardIngredients: "vodka, espresso, kahlua, irish cream",
        description: "Austrian café-inspired espresso martini, shaken & served up",
        glass: "coupe",
        ingredients: [
            "1.5 oz vodka",
            "Double-shot of espresso (chilled)",
            "0.5 oz Kahlua",
            "0.5 oz Irish Cream",
            "0.25 oz Frangelico"
        ],
        method: "Combine all ingredients in a shaker with ice and shake vigorously to create a creamy foam.",
        serve: "Double strain into a chilled coupe or martini glass. Garnish with a coffee bean."
    }
};