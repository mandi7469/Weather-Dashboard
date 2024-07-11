const apiKey = "2bc1151fda74b88dd261b6c74a71e62f";
//const apiKey2 = "19c6bdc95135f815210267ff5a1d5784"
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

function citySearch(event) {
  event.preventDefault();

  const cityName = searchInput.value.trim();

  if (cityName) {
    getWeather(cityName);
    getWeeklyForecast()

    searchInput.value = " ";
  } else {
    alert("Please enter a city name");
  }
}

function getWeather(cityName) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayTodayForecast(data);
        });
      } else {
        alert(`Error:${response.statusText}`);
      }
    })
    .catch(function (error) {
      alert("Unable to process request");
    });
}

function displayTodayForecast(data) {
  let cityName = $("#city-name")[0]
  let temp = $("#temp")[0].textContent = `Temp: ${data.main.temp}\u00B0F`
  let wind = $("#wind")[0].textContent = `Wind: ${data.wind.speed} MPH`
  let humidity = $("#humidity")[0].textContent = `Humidity: ${data.main.humidity} %`
  const now = dayjs().format("MM/DD/YYYY");

  const icon = document.createElement("img");
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  cityName.textContent = `${data.name} (${now})`;
  cityName.append(icon)
}


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

function displayWeeklyForecast(data)











function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  //const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + 1 + "&lon=" +1 + "&appid=" + apiKey
  const requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=" + apiKey;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
      // for (const repo of data) {
      //   // Creating elements, tablerow, tabledata, and anchor
      //   const createTableRow = document.createElement('tr');
      //   const tableData = document.createElement('td');
      //   const link = document.createElement('a');

      //   // Setting the text of link and the href of the link
      //   link.textContent = repo.html_url;
      //   link.href = repo.html_url;

      //   // Appending the link to the tabledata and then appending the tabledata to the tablerow
      //   // The tablerow then gets appended to the tablebody
      //   tableData.appendChild(link);
      //   createTableRow.appendChild(tableData);
      //   tableBody.appendChild(createTableRow);
      // }
    });
}
getApi();

//   fetchButton.addEventListener('click', getApi);

searchButton.addEventListener("click", citySearch);
