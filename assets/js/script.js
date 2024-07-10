const apiKey = "2bc1151fda74b88dd261b6c74a71e62f";
//const apiKey2 = "19c6bdc95135f815210267ff5a1d5784"
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

function citySearch(event) {
  event.preventDefault();

  const cityName = searchInput.value.trim();

  if (cityName) {
    searchInput.value = "";
  } else {
    alert("Please enter a city name");
  }
}










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
