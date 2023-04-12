const myImage = document.getElementById("favoriteBtn");

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
