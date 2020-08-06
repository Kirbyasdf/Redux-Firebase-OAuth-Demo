import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";

import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import SignUpSignIn from "./pages/sign-up-sign-in/SignUpSignIn";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const asyncFunc = async (userAuth) => {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({ id: snapShot.id, ...snapShot.data() });
          });
        };
        asyncFunc(userAuth);
      }
      setCurrentUser(userAuth);
    });
    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
  }, [currentUser]);

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
