import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//firebase is meant to be a public API KEY///disregard git guardian
const config = {
  apiKey: "AIzaSyDIL7imPAbiJk6Rww7WoaufU4V9BwEkpz8",
  authDomain: "graphql-clothing-store.firebaseapp.com",
  databaseURL: "https://graphql-clothing-store.firebaseio.com",
  projectId: "graphql-clothing-store",
  storageBucket: "graphql-clothing-store.appspot.com",
  messagingSenderId: "686643727023",
  appId: "1:686643727023:web:8d9befb8bed09017f1e25a",
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (err) {
      console.error("error creating user", err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
