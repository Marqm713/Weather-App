
//Make variables for all countrycode, zip, and key, required for the URL
const apiKey = 'a1d3818b8fe4ac136019b60d90658dfb';
const zipCode= 77057;
const countryCode = 'us';

const temperature = document.getElementById('temperature'); //name of paragraph in the HTML page it is connected to
const getTemp = document.getElementById('get-weather'); //create a vairable that connects to our button on the HTML page
const getWind = document.getElementById('windSpeed') //connect to the <p>

function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}&units=imperial`) //make sure to change units because we are not metric!
    .then(response => {
        return response.json(); // create a function response that will Parse the JSON into JS
    })
    .then(data => { // create a function process all that we recieved in API call
        const description = 'Weather description: ' + data.weather[0].description
        const temp = data.main.temp + ' degrees'; //"temp" is in "Main" on our JSON api, this key: value pair contains the temperature value
        const icon_code = data.weather[0].icon
        const windSpd = 'Wind speed:' + data.wind.speed + 'mph';
        weather.textContent = description;
        windSpeed.textContent = windSpd;
        temperature.textContent = temp; //update temperature paragraph with the value of currentTemp
        
        icon.setAttribute("src",`https://openweathermap.org/img/wn/${icon_code}.png`);
    })
    .catch(error => { //create a function for an error
        console.log('There was an error: ' +error);

    })
}
function get5Weather(){
fetch(`api.openweathermap.org/data/2.5/forecast?lat=29&lon=95&appid=a1d3818b8fe4ac136019b60d90658dfb&units=imperial`){
    
}

}
get5day.addEventListener('click',get5Weather)
getTemp.addEventListener('click',getWeather) //create a function for the button, when 'clicked' getWeather is called


