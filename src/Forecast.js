import React, { useState } from "react";
import axios from "axios";
import ForecastOutput from "./ForecastOutput.js";
import "./Forecast.css";

export default function Forecast(props) {
  const [ForecastData, setForecastData] = useState({ ready: false });

  function searchForecast() {
    const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=${unit}&exclude=hourly,minutely`;
    axios.get(apiUrl).then(showForecast);
  }

  function showForecast(response) {
    console.log(response);
    setForecastData({
      ready: true,
      info: response.data,
    });
  }

  if (ForecastData.ready) {
    return (
      <div className="Forecast">
        <ForecastOutput output={ForecastData.info.daily[1]} />
        <ForecastOutput output={ForecastData.info.daily[2]} />
        <ForecastOutput output={ForecastData.info.daily[3]} />
        <ForecastOutput output={ForecastData.info.daily[4]} />
        <ForecastOutput output={ForecastData.info.daily[5]} />
      </div>
    );
  } else {
    searchForecast();
    return "Loading...";
  }
}
