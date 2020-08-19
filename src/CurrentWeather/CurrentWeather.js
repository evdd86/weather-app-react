import React from "react";
import SearchForm from "./SearchForm/SearchForm.js";

function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      It is {props.data.temp} in {props.data.city};
    </div>
  );
}

export default CurrentWeather;
