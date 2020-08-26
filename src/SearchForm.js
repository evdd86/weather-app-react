import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Current from "./Current.js";
import Forecast from "./Forecast.js";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState(props.defaultUnit);
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
    axios.get(`${apiUrl}`).then(showWeather, function (error) {
      if (city.value === undefined) {
        alert(`Error.
      Did you fill in a city?
         No: Please do :-) 
         Yes: Is the city spelled correctly?
            No: Try again with the correct spelling.
            Yes: Try your luck on https://www.google.com/search?q=weather+${city}`);
      }
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
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response);
  }

  function handleClickLocation(event) {
    event.preventDefault();
    function showGeolocation(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
      const unit = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
      axios.get(apiUrl).then(showWeather);
    }

    navigator.geolocation.getCurrentPosition(showGeolocation);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("°F");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("°C");
  }

  if (weatherData.ready) {
    return (
      <div className="SearchForm">
        <form>
          <div className="d-flex flex-row justify-content-center">
            <div className="d-flex flex-col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city and search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
                autoComplete="off"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="d-flex flex-col">
              <button className="btn" type="button" onClick={handleClickSearch}>
                <FontAwesomeIcon icon={faSearchLocation} color="white" />
              </button>
            </div>
            <div className="d-flex flex-col align-items-center">
              or use your location
              <button
                className="btn"
                type="button"
                onClick={handleClickLocation}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
              </button>
            </div>
          </div>
        </form>
        <div>
          <Current data={weatherData} unit={unit} />
          <Forecast lat={weatherData.lat} lon={weatherData.lon} unit={unit} />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center switch">
          Switch units here:
          <button className="btn" type="button" onClick={showCelcius}>
            °C
          </button>
          <button className="btn" type="button" onClick={showFahrenheit}>
            °F
          </button>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
