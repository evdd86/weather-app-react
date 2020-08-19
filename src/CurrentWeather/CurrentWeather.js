import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div class="d-flex flex-row justify-content-center">
        <form id="search-form" class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search a city or use current location."
            aria-label="Search city."
            aria-describedby="button-addon1"
            autocomplete="off"
            id="input-search-city"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              id="button-search-city"
            >
              Search
            </button>
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-show-city"
            >
              Current
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
