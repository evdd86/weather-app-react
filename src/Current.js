import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import "./Current.css";

export default function Current(props) {
  function convertTemperature() {
    let temp = props.data.temperature;
    if (props.unit === "°C") {
      return temp;
    } else {
      return (temp * 9) / 5 + 32;
    }
  }

  function feelTemp() {
    let feel = props.data.feel;
    if (props.unit === "°C") {
      return feel;
    } else {
      return (feel * 9) / 5 + 32;
    }
  }

  function convertMinTemp() {
    let mintemp = props.data.mintemp;
    if (props.unit === "°C") {
      return mintemp;
    } else {
      return (mintemp * 9) / 5 + 32;
    }
  }

  function convertMaxTemp() {
    let maxtemp = props.data.maxtemp;
    if (props.unit === "°C") {
      return maxtemp;
    } else {
      return (maxtemp * 9) / 5 + 32;
    }
  }

  return (
    <div className="Current">
      <div className="d-flex flex-row justify-content-center city">
        {props.data.city}
      </div>
      <div className="d-flex flex-row justify-content-center date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="d-flex flex-row justify-content-center icon">
        <WeatherIcon
          icon={props.data.icon}
          description={props.data.description}
        />
      </div>
      <div className="d-flex flex-row align-items-center current-data">
        <div className="col-6 temp">{Math.round(convertTemperature())}°</div>
        <div className="col-6 conditions">
          <ul className="list-group list-group-flush">
            <li className="list-group-item description ">
              {props.data.description}
            </li>
            <li className="list-group-item feel">
              Feels like {Math.round(feelTemp())}°
            </li>
            <li className="list-group-item humidity">
              Humidity: {Math.round(props.data.humidity)}%
            </li>
            <li className="list-group-item windspeed">
              Windspeed: {Math.round(props.data.windspeed)} KM/H
            </li>
            <li className="list-group-item tempminmax">
              <FontAwesomeIcon icon={faArrowCircleDown} color="white" />{" "}
              {Math.round(convertMinTemp())}°{" "}
              <FontAwesomeIcon icon={faArrowCircleUp} color="white" />{" "}
              {Math.round(convertMaxTemp())}°
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center time">
        <FormattedTime time={props.data.date} />
      </div>
    </div>
  );
}
