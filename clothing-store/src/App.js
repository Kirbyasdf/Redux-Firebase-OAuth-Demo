import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";

import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import SignUpSignIn from "./pages/sign-up-sign-in/SignUpSignIn";

import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignUpSignIn} />
      </Switch>
    </div>
  );
}

export default App;
