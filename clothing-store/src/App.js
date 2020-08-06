import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/users.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import SignUpSignIn from "./pages/sign-up-sign-in/SignUpSignIn";

function App({ setCurrentUser }) {
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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignUpSignIn} />
      </Switch>
    </div>
  );
}

const mdp = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mdp)(App);
