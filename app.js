let params = new URL(document.location.toString()).searchParams;
let weatherData = document.getElementById('wheather-data')

async function weatherLao(e) {
    // e.preventDefault()
    const search = params.get("search")
    weatherData.innerHTML = "Loading..."
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=8c82e9114e414940be1103530240208&q=${search}&aqi=no`)
        const d = await data.json()
        weatherData.innerHTML = `<p>${d.location.name}</p><h3>${d.current.temp_c} degree celcius</h3>`
    } catch (error) {
        weatherData.innerHTML = `<p>The location you have entered is incorrect please search again :(</p>`
    }

}

weatherLao()

// keywords