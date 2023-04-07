const fetchLocation = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b096135c0ecd098d7bef5ed1f3046a48`)
    const jsonData = await response.json()
    console.log(jsonData)

    const cityName = document.getElementById("cityName")
    const currentTemp = document.getElementById("currentTemp")
    const weatherDescription = document.getElementById("weatherDescription");
    const humidity = document.getElementById("humidity")
    const windSpeed = document.getElementById("windSpeed")
    const minTemp = document.getElementById("minTemp")
    const maxTemp = document.getElementById("maxTemp")
    const weatherIcon = document.getElementById("weatherIcon")


    cityName.textContent = jsonData.name
    currentTemp.textContent = `${(jsonData.main.temp - 273.15).toFixed(1)} °C`
    minTemp.textContent = `${(jsonData.main.temp_min - 273.15).toFixed(1)} °C`
    maxTemp.textContent = `${(jsonData.main.temp_max - 273.15).toFixed(1)} °C`
    weatherDescription.textContent = jsonData.weather[0].description
    humidity.textContent = jsonData.main.humidity
    windSpeed.textContent = jsonData.wind.speed
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${jsonData.weather[0].icon}.png">`
}


//Current Weather
const getWeather = () => {
    let lat = 49.246292
    let lon = -123.116226


    if (!navigator.geolocation) {
        fetchLocation(lat, lon)
        return;
    };

    const onSuccess = (position) => {
        lat = position.coords.latitude
        lon = position.coords.longitude
        fetchLocation(lat, lon)
    }

    const onError = (err) => {
        console.log(err)
        fetchLocation(lat, lon)
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}

getWeather()


//5days Weather (for now I put Van)
// const getWeatherfor5days = async () => {
//     const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=49.246292&lon=-123.116226&appid=b096135c0ecd098d7bef5ed1f3046a48")
//     const jsonData = await response.json()
//     console.log(jsonData)
// }

// getWeatherfor5days()