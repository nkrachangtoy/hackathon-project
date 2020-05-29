import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.css";

// COMPONENTS //
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
