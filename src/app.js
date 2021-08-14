function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "d93c482c792cf783295525de63b6fb3a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
