const apiKey = "2bc1151fda74b88dd261b6c74a71e62f";
//const apiKey2 = "19c6bdc95135f815210267ff5a1d5784"
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

// check local storage for stroed city name or creates a new aray to store the new data 
const searchData = JSON.parse(localStorage.getItem("cityName")) || [];

// handles the city search submission
function citySearch(event) {
  event.preventDefault();

  // gets the trimmed city name from the search 
  const cityName = searchInput.value.trim();

  //checks if city name was entered, if so, fetch the weather, if not display an alert if no city name was found
  if (cityName) {
    getWeather(cityName);
    getWeeklyForecast(cityName);

    searchInput.value = " ";
  } else {
    alert("Please enter a city name");
  }
}

// fetches the weather data for a given city name using the API URL and converts the response to JSON 
function getWeather(cityName) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayTodayForecast(data); // calls the display today forecast function
        });
      } else {
        alert(`Error:${response.statusText}`);
      }
    })
    .catch(function (error) {
      alert("Unable to process request");
    });
}

// displays the current weather data 
function displayTodayForecast(data) {
  let cityName = $("#city-name")[0]
  let temp = $("#temp")[0].textContent = `Temp: ${data.main.temp}\u00B0F`
  let wind = $("#wind")[0].textContent = `Wind: ${data.wind.speed} MPH`
  let humidity = $("#humidity")[0].textContent = `Humidity: ${data.main.humidity} %`
  const now = dayjs().format("MM/DD/YYYY");

  // creates an image element for the weather icon
  const icon = document.createElement("img");
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  cityName.textContent = `${data.name} (${now})`;
  cityName.append(icon)
}

// fetches the weekly forecast data for a given city using the API URL and converts the responce to JSON
function getWeeklyForecast(cityName){
  const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;

  fetch(requestUrl)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayWeeklyForecast(data);
      });
    } else {
      alert(`Error:${response.statusText}`);
    }
  })
  .catch(function (error) {
    alert("Unable to process request");
  });

}

//updates the elements to display the weekly forecast for a given city received by the API data
function displayWeeklyForecast(data){
  let dataDay1 = data.list[3]
  let dataDay2 = data.list[11]
  let dataDay3 = data.list[19]
  let dataDay4 = data.list[27]
  let dataDay5 = data.list[35]
  
  let day1 = $("#day1").children()
  day1[0].textContent = dayjs(dataDay1.dt_txt.split(" ")[0]).format("MM/DD/YYYY")
  day1[1].src = `https://openweathermap.org/img/wn/${dataDay1.weather[0].icon}.png`;
  day1[2].textContent = `Temp: ${dataDay1.main.temp}\u00B0F`
  day1[3].textContent = `Wind: ${dataDay1.wind.speed} MPH`
  day1[4].textContent =  `Humidity: ${dataDay1.main.humidity} %`

  let day2 = $("#day2").children()
  day2[0].textContent = dayjs(dataDay2.dt_txt.split(" ")[0]).format("MM/DD/YYYY")
  day2[1].src = `https://openweathermap.org/img/wn/${dataDay2.weather[0].icon}.png`;
  day2[2].textContent = `Temp: ${dataDay2.main.temp}\u00B0F`
  day2[3].textContent = `Wind: ${dataDay2.wind.speed} MPH`
  day2[4].textContent =  `Humidity: ${dataDay2.main.humidity} %`

  let day3 = $("#day3").children()
  day3[0].textContent = dayjs(dataDay3.dt_txt.split(" ")[0]).format("MM/DD/YYYY")
  day3[1].src = `https://openweathermap.org/img/wn/${dataDay3.weather[0].icon}.png`;
  day3[2].textContent = `Temp: ${dataDay3.main.temp}\u00B0F`
  day3[3].textContent = `Wind: ${dataDay3.wind.speed} MPH`
  day3[4].textContent =  `Humidity: ${dataDay3.main.humidity} %`

  let day4 = $("#day4").children()
  day4[0].textContent = dayjs(dataDay4.dt_txt.split(" ")[0]).format("MM/DD/YYYY")
  day4[1].src = `https://openweathermap.org/img/wn/${dataDay4.weather[0].icon}.png`;
  day4[2].textContent = `Temp: ${dataDay4.main.temp}\u00B0F`
  day4[3].textContent = `Wind: ${dataDay4.wind.speed} MPH`
  day4[4].textContent =  `Humidity: ${dataDay4.main.humidity} %`

  let day5 = $("#day5").children()
  day5[0].textContent = dayjs(dataDay5.dt_txt.split(" ")[0]).format("MM/DD/YYYY")
  day5[1].src = `https://openweathermap.org/img/wn/${dataDay5.weather[0].icon}.png`;
  day5[2].textContent = `Temp: ${dataDay5.main.temp}\u00B0F`
  day5[3].textContent = `Wind: ${dataDay5.wind.speed} MPH`
  day5[4].textContent =  `Humidity: ${dataDay5.main.humidity} %`

}



// event listener for the serach button 
searchButton.addEventListener("click", citySearch);
