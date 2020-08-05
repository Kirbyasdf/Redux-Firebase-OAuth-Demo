import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";

import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import SignUpSignIn from "./pages/sign-up-sign-in/SignUpSignIn";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignUpSignIn} />
      </Switch>
    </div>
  );
}

export default App;
