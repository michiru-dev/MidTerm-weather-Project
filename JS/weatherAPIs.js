const fetchWeather = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b096135c0ecd098d7bef5ed1f3046a48`)
    const jsonData = await response.json()
    // console.log(jsonData)

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

const fetch5daysWeather = async (lat, lon) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b096135c0ecd098d7bef5ed1f3046a48`)
    const jsonData2 = await res.json()
    // console.log(jsonData2.list)

    const dailyData = jsonData2.list.reduce((acc, data) => {
        const date = new Date(data.dt_txt.split(' ')[0]).toLocaleString('en-US', { weekday: 'short', month: 'long', day: 'numeric' });
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(data);
        // console.log(acc)
        return acc;
    }, {});

    console.log(dailyData)

    // Calculate the average temperature for each day
    const dailyTemperatureData = Object.entries(dailyData).map(([date, data]) => {
        const maxTemp = Math.max(...data.map(item => item.main.temp_max)) - 273.15;
        const minTemp = Math.min(...data.map(item => item.main.temp_min)) - 273.15;
        const avgTemp = data.reduce((acc, item) => acc + item.main.temp, 0) / data.length - 273.15;
        return { date, maxTemp: maxTemp.toFixed(1), minTemp: minTemp.toFixed(1), avgTemp: avgTemp.toFixed(1) };
    });

    console.log(dailyTemperatureData)


    // Display weather information for each day
    dailyTemperatureData.forEach((data, index) => {
        const dayIndex = index + 1;
        const dateElement = document.getElementById(`date${dayIndex}`);
        const weatherElement = document.getElementById(`weather${dayIndex}`);
        const tempElement = document.getElementById(`temp${dayIndex}`);
        dateElement.textContent = data.date;
        weatherElement.textContent = data.weather;
        tempElement.textContent = `Max:  ${(data.maxTemp)} °C, 
        Min: ${(data.minTemp)} °C, Avg:  ${(data.avgTemp)} °C`;
    });
}



//Current Weather
const getWeather = () => {
    let lat = 49.246292
    let lon = -123.116226


    if (!navigator.geolocation) {
        fetchWeather(lat, lon)
        fetch5daysWeather(lat, lon)
        return;
    };

    const onSuccess = (position) => {
        lat = position.coords.latitude
        lon = position.coords.longitude
        fetchWeather(lat, lon)
        fetch5daysWeather(lat, lon)
    }

    const onError = (err) => {
        console.log(err)
        fetchWeather(lat, lon)
        fetch5daysWeather(lat, lon)
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}

getWeather()

