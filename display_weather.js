const displayWeather = function(data) {
  let {main: {temp, humidity}, wind: {speed}, weather: [{main, icon}]} = {...data};  
  
  const locationDisplay = document.querySelector('.app__data-display__weather-city');
  locationDisplay.textContent = data.name;
  
  const temperatureDisplay = document.querySelector('.app__data-display__weather-temp');
  temperatureDisplay.textContent = ` ${temp} °C`;
  
  const humidityDisplay = document.querySelector('.app_data-display__humidity-data');
  humidityDisplay.textContent = `${humidity} %`;
  
  const windDisplay = document.querySelector('.app_data-display__wind-data');
  windDisplay.textContent = `${speed} m/s`;
  
  const iconDisplay = document.querySelector('.app__data-display__icon');
  iconDisplay.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  }
  
  
  // Export
  export { displayWeather}
  
  