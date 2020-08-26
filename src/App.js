import React from "react";
import SearchForm from "./SearchForm.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm defaultCity="Brussels" defaultUnit="°C" />
      </div>
      <footer>
        {" "}
        <a href="https://github.com/evdd86/weather-app-react">
          Open sourced code
        </a>{" "}
        by Ellen Van der Donckt <br />
        <a href="https://www.iconfinder.com/iconsets/sketchy-weather-icons-by-azuresol">
          Sketchy Weather Icons by Azuresol @ Iconfinder
        </a>{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en">
          (licence)
        </a>
      </footer>
    </div>
  );
}

export default App;
