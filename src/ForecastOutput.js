import React from "react";
import "./ForecastOutput.css";

export default function ForecastOutput(props) {
  function showForecastDay() {
    let date = new Date(props.output.dt * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function showForecastMinTemp() {
    let minTemp = Math.round(props.output.temp.min);
    return `${minTemp}`;
  }

  function showForecastMaxTemp() {
    let maxTemp = Math.round(props.output.temp.max);
    return `${maxTemp}`;
  }

  function showForecastHumidity() {
    let humidity = Math.round(props.output.humidity);
    return `${humidity}`;
  }

  function showForecastIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.output.weather[0].icon}@2x.png`;
    let description = props.output.weather[0].description;
    return <img className="icon" src={icon} alt={description}></img>;
  }

  return (
    <div className="ForecastOutput">
      {showForecastDay()}
      {showForecastIcon()}
      {showForecastMinTemp()}
      {showForecastMaxTemp()}
      {showForecastHumidity()}
    </div>
  );
}
