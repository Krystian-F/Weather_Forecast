import { makeApiConnection } from "./api_connection.js";
import { displayWeather } from "./display_weather.js";
import { pickLocation } from "./randomCityGenerator.js";

const searchInput = document.querySelector('.app__search-location');
let location = '';

const fetchWeather = function(location) {
  makeApiConnection(location)
    .then((data) => {
      displayWeather(data);
    })
    .catch((err) => {
      console.log(err);
    })
}

const getInput = function(e) {
  if(e.keyCode === 13 || e.key === 'Enter') {
    location = searchInput.value;
    fetchWeather(location);
    searchInput.value = '';
  } else {
    return;
  }
}

const init = () => {
  location = pickLocation();
  fetchWeather(location);
}

window.addEventListener('load', init);
searchInput.addEventListener('keydown', getInput);