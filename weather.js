// weather app frontend file
let state = reactive({
  selectedCity: "London",
  weather: {
    temperature: "N/A",
    humidity: "N/A",
    description: "",
  },
});

const mockWeatherData = {
  "New York": {
    temperature: "15°C",
    humidity: "55%",
    description: "Cloudy",
  },
  London: {
    temperature: "10°C",
    humidity: "75%",
    description: "Rainy",
  },
  Tokyo: {
    temperature: "22°C",
    humidity: "65%",
    description: "Sunny",
  },
  Sydney: {
    temperature: "25°C",
    humidity: "60%",
    description: "Sunny",
  },
};

function fetchWeather(city) {
  setTimeout(() => {
    const weather = mockWeatherData[city];
    state.weather.temperature = weather.temperature;
    state.weather.humidity = weather.humidity;
    state.weather.description = weather.description;
  }, 500);
}

createEffect(function () {
  fetchWeather(state.selectedCity);
});

createEffect(function () {
  render(
    "#container",
    `<h1>You selected ${state.selectedCity}</h1>
    <select onChange=updateSelectedCity(this.value)>
    <option value="London"> London</option>
    <option value="Tokyo"> Tokyo</option>
    <option value="New York"> New York</option>
    <option value="Sydney"> Sydney</option>
  </select>
  <div>
    <p>Temperature: ${state.weather.temperature}</p>
    <p>Humidity: ${state.weather.humidity}</p>
    <p>Description: ${state.weather.description}</p>
  </div>
  <sub>
      Vyne.js is a toy framework to understand how UI frameworks
      such as react work
  </sub>`,
  );
});

function updateSelectedCity(city) {
  state.selectedCity = city;
  fetchWeather(city);
}
