import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "../spinner/spinner";

const CoffeeShop = lazy(() => import("../coffeeShop/coffeeShop"));
const CoffeeMain = lazy(() => import("../coffeeMain/coffeeMain"));
const CoffeeOne = lazy(() => import("../coffeeOne/coffeeOne"));
const CoffeePleasure = lazy(() => import("../coffeePleasure/coffeePleasure"));

import "./app.css";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<CoffeeMain />} />
          <Route path="/our" element={<CoffeeShop />} />
          <Route path="/coffee/:id" element={<CoffeeOne />} />
          <Route path="/pleasure" element={<CoffeePleasure />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
