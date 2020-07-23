import React from "react";
import "./styles.css";
import Thedate from "./Date.js";

export default function App() {
  return (
    <div className="App">
      <h1>Countdown Sandbox</h1>
      <h2>Choose a date to set up countdown!</h2>
      <Thedate />
    </div>
  );
}
