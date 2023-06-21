import { Component } from "react";
import CofeeAbout from "../coffeeAbout/coffeeAbout";
import CoffeeMain from "../coffeeMain/coffeeMain";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <CoffeeMain />
        <CofeeAbout />
      </div>
    );
  }
}

export default App;
