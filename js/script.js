document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const recipeGrid = document.getElementById("recipeGrid");

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchTerm = searchInput.value
                .trim()
                .toLowerCase();

            if (searchTerm === "") {
                return;
            }

            const results = recipes.filter(function (recipe) {

                return (
                    recipe.title.toLowerCase().includes(searchTerm) ||
                    recipe.category.toLowerCase().includes(searchTerm) ||
                    recipe.description.toLowerCase().includes(searchTerm)
                );

            });


            if (results.length === 0) {

                alert(
                    "Sorry, we couldn't find a recipe matching your search."
                );

                return;
            }


            if (recipeGrid) {

                recipeGrid.innerHTML = "";

                results.forEach(function (recipe) {

                    recipeGrid.innerHTML += `

                        <article class="recipe-card">

                            <a
                                href="${recipe.url}"
                                class="recipe-image">

                                <img
                                    src="${recipe.image}"
                                    alt="${recipe.title}">

                            </a>

                            <div class="recipe-content">

                                <span class="recipe-category">
                                    ${recipe.category}
                                </span>

                                <h3>
                                    <a href="${recipe.url}">
                                        ${recipe.title}
                                    </a>
                                </h3>

                                <p>
                                    ${recipe.description}
                                </p>

                                <span class="recipe-meta">
                                    ${recipe.time} · ${recipe.difficulty}
                                </span>

                            </div>

                        </article>

                    `;

                });


                document
                    .getElementById("recipes")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    }


    /* ================= MOBILE MENU ================= */

    const mobileButton =
        document.getElementById("mobileMenuButton");

    const mobileNav =
        document.getElementById("mobileNav");


    if (mobileButton && mobileNav) {

        mobileButton.addEventListener("click", function () {

            mobileNav.classList.toggle("active");

        });


        const mobileLinks =
            mobileNav.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileNav.classList.remove("active");

            });

        });

    }

});