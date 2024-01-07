const temp = document.querySelector('h2')
    const label = document.querySelector('label')
    const p= document.querySelectorAll('p')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getweather(latitude,longitude)
}

function errorCallback(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        default:
            console.log("An unknown error occurred.");
            break;
    }
}

function  getweather(latitude,longitude){
console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b004f391b9msh8c00e9ba2a964c5p1f052ajsn468e96b6733c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
fetch(url,options)
.then(response => 
    { return response.json()})
.then(data =>
    { console.log(data)
        label.innerHTML= `lon-${longitude} & lat-${latitude}`;
        temp.innerHTML= `Temp-> ${data.temp} °C`;
        p[0].innerHTML= `Max temp-${data.max_temp}°C & Min temp-${data.min_temp}°C`
        p[1].innerHTML=`Feels like-${data.feels_like}°C`
        p[2].innerHTML=`Humidity-${data.humidity}%`
        p[3].innerHTML=`Wind Speed-${data.wind_speed}km/h`
    });
}


 

function getch(){  
    const city = document.getElementById('city').value;
    if (city === null || city.trim() === ""){
       alert("enter the valid city")
    }
    else{
    
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b004f391b9msh8c00e9ba2a964c5p1f052ajsn468e96b6733c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(url,options)
    .then(response => 
        { return response.json()})
    .then(data =>
        { 
            label.innerHTML= city;
            temp.innerHTML=  `Temperature ${data.temp} °C`;
            p[0].innerHTML= `Max temp-${data.max_temp}°C & Min temp-${data.min_temp}°C`
            p[1].innerHTML=`Feels like-${data.feels_like}°C`
            p[2].innerHTML=`Humidity-${data.humidity}%`
            p[3].innerHTML=`Wind Speed-${data.wind_speed}km/h`
        });
    
    }
}

