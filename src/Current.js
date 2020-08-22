import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
  faWind,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./Current.css";

export default function Current(props) {
  function showForecastIcon() {
    let icon = props.data.iconUrl;
    let description = props.data.description;
    return (
      <img className="icon" src={icon} alt={description} width="115"></img>
    );
  }

  return (
    <div className="Current">
      <div className="d-flex flex-row border border-dark">
        <div className="col-7 col-left">
          <div className="flex-row city">{props.data.city}</div>
          <div className="flex-row date">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="flex-row temp">
            {Math.round(props.data.temperature)}°
          </div>
          <div className="flex-row feel">
            Feels like {Math.round(props.data.feel)}°
          </div>
          <div className="flex-row tempminmax">
            <FontAwesomeIcon icon={faArrowCircleDown} color="green" />{" "}
            {Math.round(props.data.mintemp)}°{" "}
            <FontAwesomeIcon icon={faArrowCircleUp} color="green" />{" "}
            {Math.round(props.data.maxtemp)}°
          </div>
        </div>
        <div className="col-5 col-right">
          <div className="flex-row conditions">Currently</div>
          <div className="flex-row icon justify-content-center">
            {showForecastIcon()}
          </div>
          <div className="flex-row description">{props.data.description}</div>
          <div className="flex-row windspeed">
            <FontAwesomeIcon icon={faWind} color="green" />{" "}
            {Math.round(props.data.windspeed)} KM/H
          </div>
          <div className="flex-row humidity">
            <FontAwesomeIcon icon={faTint} color="green" />{" "}
            {Math.round(props.data.humidity)}%
          </div>
          <div className="flex-row time">
            <FormattedTime time={props.data.date} />
          </div>
        </div>
      </div>
    </div>
  );
}
