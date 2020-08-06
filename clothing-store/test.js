import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore.collection("users").doc("JiN3WSPZ3xMLPYQJnNpR").collection("cartItems");

firestore.doc("/users/JiN3WSPZ3xMLPYQJnNpR/cartItems/ifdZwqWdLGwiPaTY1bDj");

firestore.collection("/users/JiN3WSPZ3xMLPYQJnNpR/cartItems");
