import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.css";

// COMPONENTS //
import Header from "./components/Header";
import Services from "./components/Services";
import Testimontials from "./components/Testimontials";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Services />
        <Testimontials />
      </div>
    </Router>
  );
}

export default App;
