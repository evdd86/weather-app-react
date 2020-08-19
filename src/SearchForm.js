import React, { useState } from "react";
import Current from "./Current.js";
import Forecast from "./Forecast.js";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleClickSearch(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather, function (error) {
      alert(`Little error.
        1. Did you fill in a city?
        2. Is the city spelled correctly?
        Still not working ?
        3. Try going to https://www.google.com/search?q=weather+${city}`);
    });
  }

  function showWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      feel: response.data.main.feels_like,
      temperature: response.data.main.temp,
      mintemp: response.data.main.temp_min,
      maxtemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      cloudiness: response.data.clouds.all,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchForm">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-dark"
              type="button"
              onClick={handleClickSearch}
            >
              Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={handleCityChange}
          ></input>
        </div>
        <div>
          <Current data={weatherData} />
          <Forecast lat={weatherData.lat} lon={weatherData.lon} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
