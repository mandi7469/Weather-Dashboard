const apiKey = "2bc1151fda74b88dd261b6c74a71e62f"
const apiKey2 = "19c6bdc95135f815210267ff5a1d5784"

let city; 

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    //const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey
    const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=lake worth&appid=" + apiKey
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
  getApi()
  
//   fetchButton.addEventListener('click', getApi);

