// const favoriteBtn = document.querySelector("#favoriteBtn");
// favoriteBtn.addEventListener("click", toggleFavorite);

// function toggleFavorite() {
//   const favoriteBtn = document.querySelector("#favoriteBtn");
//   const isFavorite = favoriteBtn.classList.contains("favorite");

//   if (isFavorite) {
//     removeFavorite();
//   } else {
//     addFavorite();
//   }
// }

// function removeFavorite() {
//   const favoriteBtn = document.querySelector("#favoriteBtn");
//   favoriteBtn.classList.remove("favorite");
//   const currentCity = document.querySelector("#cityName").textContent;
//   const cityIndex = favoriteCities.indexOf(currentCity);
//   favoriteCities.splice(cityIndex, 1);
//   localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
// }

// function addFavorite() {
//   const favoriteBtn = document.querySelector("#favoriteBtn");
//   favoriteBtn.classList.add("favorite");
//   const currentCity = document.querySelector("#cityName").textContent;
//   favoriteCities.push(currentCity);
//   localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
//   console.log(currentCity)
// }

// let favoriteCities = [];

// // to store locally - doesn't work without host, tho
// if (localStorage.getItem("favoriteCities")) {
//   favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
// }

// const currentCity = document.querySelector("#cityName");
// if (favoriteCities.includes(currentCity)) {
//   const favoriteBtn = document.querySelector("favoriteBtn");
//   favoriteBtn.classList.add("favorite");
// }

// till here


const myImage = document.getElementById("starIcon");
// let allCities = [];

myImage.addEventListener("click", () => {
  myImage.classList.toggle("yes");

  const currentCity = document.querySelector("#cityName").textContent;
  const select = document.querySelector('#select');

  if(myImage.classList.contains('yes')) {
    let option = document.createElement('option');

    option.textContent = currentCity;
    select.appendChild(option);
  }else {
    // search for the current option city, analyzing through all options
    // then, removing the options that matches with the current city 

    let options = document.querySelectorAll('option');

    options.forEach(option => {
      if(option.innerText == currentCity) {
        option.remove();
      }
    })
  }
});
