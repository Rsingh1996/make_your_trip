import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyB5WBfufsbCt6FbJn4gZKRMa_HDxtNpioc",
  authDomain: "makeyourtrip-749fd.firebaseapp.com",
  databaseURL: "https://makeyourtrip-749fd-default-rtdb.firebaseio.com",
  projectId: "makeyourtrip-749fd",
  storageBucket: "makeyourtrip-749fd.appspot.com",
  messagingSenderId: "756915600321",
  appId: "1:756915600321:web:4ded3653203e52e6bc4d40",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(firebaseAuth, provider);
  };

  const logoutUser = () => {
    signOut(firebaseAuth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        isLoggedIn: !!user,
        user,
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        logoutUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
