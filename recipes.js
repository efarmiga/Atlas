// Recipe data for all cocktails
const recipes = {
    // CREATIONS
    'vienna-velvet': {
        name: "Vienna Velvet",
        ingredients: [
            "1.5 oz vodka",
            "Double-shot of espresso (chilled)",
            "0.75 oz Kahlua",
            "0.75 oz Irish Cream"
        ],
        method: "Combine all ingredients in a shaker with ice and shake vigorously to create a creamy foam.",
        serve: "Double strain into a chilled coupe or martini glass. Garnish with three coffee beans."
    },
    'capri-75': {
        name: "Capri 75",
        ingredients: [
            "1 oz gin",
            "0.75 oz Limoncello",
            "Top with Prosecco"
        ],
        method: "Combine gin and limoncello in a shaker with ice and shake briefly.",
        serve: "Strain into a chilled champagne flute. Top with chilled Prosecco. Garnish with a long lemon twist."
    },
    'sicily-sunset': {
        name: "Caribbean Garibaldi",
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
        ingredients: [
            "1.5 oz bourbon",
            "1.5 oz cinzano",
            "0.75 oz rhubarb-ginger liqueur"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a lowball glass over a large rock. Garnish with a cherry."
    },
    
    // CLASSICS
    'parisian-boulevardier': {
        name: "Parisian Boulevardier",
        ingredients: [
            "1.5 oz bourbon",
            "1.5 oz campari",
            "1.5 oz sweet vermouth"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain into a chilled coupe or a lowball glass over a large rock. Garnish with an orange twist."
    },
    'new-england-old-fashioned': {
        name: "New England Old Fashioned",
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
        ingredients: [
            "1 oz gin",
            "1 oz campari",
            "1 oz sweet vermouth"
        ],
        method: "Combine ingredients in a mixing glass with ice and stir until well-chilled.",
        serve: "Strain or build in a lowball glass over a large rock. Garnish with an orange twist."
    }
};
