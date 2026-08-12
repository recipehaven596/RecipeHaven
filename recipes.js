const recipes = [








    {
        title: "Creamy Pumpkin Soup",
        category: "DINNER",
        description: "A warm and comforting creamy pumpkin soup made with pumpkin, garlic, vegetable broth, and coconut milk or cream.",
        image: "images/creamy-pumpkin-soup.png",
        time: "35 min",
        difficulty: "Easy",
        url: "Creamy_Pumpkin_Soup.html"
    },
    {
        title: "Garlic Herb Roasted Pumpkin",
        category: "DINNER",
        description: "Tender roasted pumpkin seasoned with garlic, rosemary, thyme, olive oil, and paprika, with golden caramelized edges and fresh herbs.",
        image: "images/Garlic_Herb_Roasted_Pumpkin.png",
        time: "40 min",
        difficulty: "Easy",
        url: "Garlic_Herb_Roasted_Pumpkin.html"
    },

    {
        title: "Classic Apple Crumble",
        category: "DESSERT",
        description: "Warm cinnamon apples topped with a golden, buttery oat crumble.",
        image: "images/Classic_Apple_Crumble.png",
        time: "50 min",
        difficulty: "Easy",
        url: "Classic_Apple_Crumble.html"
    },
];

























function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


function showRecommendedRecipes() {

    const container =
        document.getElementById("recommendedRecipes");

    if (!container) return;


    // Get current page
    const currentPage =
        window.location.pathname.split("/").pop();


    // Remove current recipe
    const availableRecipes =
        recipes.filter(recipe =>
            recipe.url !== currentPage
        );


    // Randomize recipes
    const randomRecipes =
        shuffleArray(availableRecipes);


    // Show only 2
    const selectedRecipes =
        randomRecipes.slice(0, 2);


    container.innerHTML =
        selectedRecipes.map(recipe => `

            <a
                href="${recipe.url}"
                class="sidebar-recipe"
            >

                <img
                    src="${recipe.image}"
                    alt="${recipe.title}"
                >

                <span>
                    ${recipe.title}
                </span>

            </a>

        `).join("");
}


showRecommendedRecipes();