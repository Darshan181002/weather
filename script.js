const apiKey = "72f19bea9bdddc25c7cb456a8dbc54ed"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// to call the city from search //

const searchBox = document.querySelector(".my_search input");
const searchBtn = document.querySelector(".my_search button");
const weatherIcon = document.querySelector(".weather_icon")

async function chechWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
        var data = await response.json();

    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png"
        }
        else if(data.weather[0] == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0] == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0] == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0] == "Mist"){
            weatherIcon.src = "mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
 
}

    // when we will click on search button it should send information on check weather fucnctions // 

    searchBtn.addEventListener("click" , ()=>{
        chechWeather(searchBox.value);

    })