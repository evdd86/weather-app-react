import React from "react";
import SearchForm from "./SearchForm.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container border border-dark">
        <SearchForm defaultCity="Brussels" />
      </div>
    </div>
  );
}

export default App;
