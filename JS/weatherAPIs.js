
//Current Weather (for now I put Van)
const getWeather = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.246292&lon=-123.116226&appid=b096135c0ecd098d7bef5ed1f3046a48")
    const jsonData = await response.json()
    console.log(jsonData)
}

getWeather()


//5days Weather (for now I put Van)
const getWeatherfor5days = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=49.246292&lon=-123.116226&appid=b096135c0ecd098d7bef5ed1f3046a48")
    const jsonData = await response.json()
    console.log(jsonData)
}

getWeatherfor5days()