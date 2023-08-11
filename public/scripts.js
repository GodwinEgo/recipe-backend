const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultsDiv.innerHTML = "Loading...";

  const searchQuery = searchInput.value;

  try {
    const response = await fetch(`/search?q=${searchQuery}`);
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    resultsDiv.innerHTML = "An error occurred.";
  }
});

function displayResults(recipes) {
  resultsDiv.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
    resultsDiv.appendChild(recipeDiv);
  });
}
