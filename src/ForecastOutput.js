import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";
import "./ForecastOutput.css";

export default function ForecastOutput(props) {
  function showForecastDay() {
    let date = new Date(props.output.dt * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function showForecastHumidity() {
    let humidity = Math.round(props.output.humidity);
    return `${humidity}`;
  }

  function convertMinTemp() {
    let mintemp = props.output.temp.min;
    if (props.unit === "°C") {
      return mintemp;
    } else {
      return (mintemp * 9) / 5 + 32;
    }
  }

  function convertMaxTemp() {
    let maxtemp = props.output.temp.max;
    if (props.unit === "°C") {
      return maxtemp;
    } else {
      return (maxtemp * 9) / 5 + 32;
    }
  }

  return (
    <div className="ForecastOutput">
      <ul>
        <li>{showForecastDay()}</li>
        <li>
          <WeatherIcon
            icon={props.output.weather[0].icon}
            description={props.output.weather[0].description}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowCircleDown} color="white" />{" "}
          {Math.round(convertMinTemp())}°
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowCircleUp} color="white" />{" "}
          {Math.round(convertMaxTemp())}°
        </li>
        <li>
          <FontAwesomeIcon icon={faTint} color="white" />{" "}
          {showForecastHumidity()}%
        </li>
      </ul>
    </div>
  );
}
