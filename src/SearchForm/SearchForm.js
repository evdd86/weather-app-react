import React, { useState } from "react";
import axios from "axios";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark" type="button">
            Search
          </button>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter a city"
          aria-label="Search"
          aria-describedby="basic-addon1"
        ></input>
      </div>
    </div>
  );
}
