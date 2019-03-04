import React, { Component } from "react";
import "./App.css";
import LineAreaChart from "./component/lineArea";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LineAreaChart />
      </div>
    );
  }
}

export default App;
