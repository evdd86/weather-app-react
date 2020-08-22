import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
  faWind,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import "./Current.css";

export default function Current(props) {
  return (
    <div className="Current">
      <div className="d-flex flex-row border border-dark">
        <div className="col-6">
          <div className="flex-row">{props.data.city}</div>
          <div className="flex-row">{props.data.lat}</div>
          <div className="flex-row">{Math.round(props.data.temperature)}</div>
          <div className="flex-row">
            <FontAwesomeIcon icon={faArrowCircleDown} color="green" />
            {Math.round(props.data.mintemp)}{" "}
            <FontAwesomeIcon icon={faArrowCircleUp} color="green" />
            {Math.round(props.data.maxtemp)}
          </div>
        </div>
        <div className="col-6">
          <div className="flex-row">Current conditions</div>
          <div className="flex-row">Last updated at 00:00</div>
          <div className="flex-row">
            Feels like {Math.round(props.data.feel)}°
          </div>
          <div className="flex-row">
            <FontAwesomeIcon icon={faWind} color="green" />{" "}
            {Math.round(props.data.windspeed)} KM/H
          </div>
          <div className="flex-row">
            <FontAwesomeIcon icon={faTint} color="green" />{" "}
            {Math.round(props.data.humidity)}%
          </div>
        </div>
      </div>
    </div>
  );
}
