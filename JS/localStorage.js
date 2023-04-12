const favoriteBtn = document.querySelector("#favoriteBtn");
favoriteBtn.addEventListener("click", toggleFavorite);

function toggleFavorite() {
    const favoriteBtn = document.querySelector("#favoriteBtn");
    const isFavorite = favoriteBtn.classList.contains("favorite");

    if (isFavorite) {
        removeFavorite();
    } else {
        addFavorite();
    }
}

let favoriteCities = [];

function removeFavorite() {
    const favoriteBtn = document.querySelector("#favoriteBtn");
    favoriteBtn.classList.remove("favorite");
    const currentCity = document.querySelector("#cityName").textContent;
    const cityIndex = favoriteCities.indexOf(currentCity);
    favoriteCities.splice(cityIndex, 1);
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
}

function addFavorite() {
    const favoriteBtn = document.querySelector("#favoriteBtn");
    favoriteBtn.classList.add("favorite");
    const currentCity = document.querySelector("#cityName").textContent;
    favoriteCities.push(currentCity);
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
    console.log(currentCity)
}

if (localStorage.getItem("favoriteCities")) {
    favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
}

const currentCity = document.querySelector("#cityName");
if (favoriteCities.includes(currentCity)) {
    const favoriteBtn = document.querySelector("favoriteBtn");
    favoriteBtn.classList.add("favorite");
}
