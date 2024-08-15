const apiKey="d4aa05c9ae5ac03dbb92c167278681f8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?";
const weatherIcon=document.querySelector(".weather-icon");
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");


async function getWeatherInfo(cityName) {
    let response= await fetch(apiUrl+`&q=${cityName}`+`&apiKey=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        let value= await response.json();
    let number=(value.main.temp)-273.15;

    


    switch(value.weather[0].main){
        case "Clouds":
            weatherIcon.src='images/clouds.png';
            break;
        case "Rain":
            weatherIcon.src='images/rain.png'
            break;

        case "Mist":
            weatherIcon.src='images/mist.png'
            break;

        case "Clear":
            weatherIcon.src='images/clear.png'
            break;

        case "Drizzle":
            weatherIcon.src='images/drizzle.png'
            break;

        case "Haze":
            weatherIcon.src='images/mist.png'
            break;

        case "Snow":
            weatherIcon.src='images/snow.png'
            break;

    }
    

  
    document.querySelector(".cityName").textContent=value.name;
    document.querySelector(".temp").innerHTML=`${parseFloat(number.toFixed(2))}°c`;
    document.querySelector(".humidity").textContent=`${value.main.humidity}%`;
    document.querySelector(".wind").textContent=`${value.wind.speed} Km/h`;   
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";


}
        
}

    

searchButton.addEventListener("click",()=>{
    getWeatherInfo(searchBox.value);
})

searchBox.addEventListener("keydown",function(event){
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission behavior if needed
        getWeatherInfo(searchBox.value); 
    }
    
})