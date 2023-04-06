
function initMap() {
    const input = document.getElementById("city-input");
    input.placeholder = "Search Cities";

    const autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["(cities)"],
    });

    // // Enterキーでフォームが送信されないようにする
    // input.addEventListener("keydown", (e) => {
    //     if (e.key === "Enter") {
    //         e.preventDefault();
    //     }
    // });
}
