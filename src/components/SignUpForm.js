import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpFormStyles.css";
import { useFirebase } from "../configure";

export const SignUpForm = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  console.log(firebase);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // State to track sign up or login

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      // Sign up
      try {
        await firebase.signupUserWithEmailAndPassword(email, password);
        console.log("User signed up");
        // Redirect to home page or perform any necessary actions
      } catch (error) {
        console.log("Sign up error:", error);
      }
    } else {
      // Login
      try {
        await firebase.signinUserWithEmailAndPassword(email, password);
        console.log("User logged in");
        // Redirect to home page or perform any necessary actions
      } catch (error) {
        console.log("Login error:", error);
      }
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogout = async () => {
    try {
      await firebase.logoutUser();
      console.log("User logged out");
      // Redirect to home page or perform any necessary actions
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <div className="form-container">
      <div>
        {isSignUp ? <h1>Sign Up</h1> : <h1>Log In</h1>}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
            />
          )}
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            autoComplete="email"
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button" onClick={toggleForm}>
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
        {firebase.isLoggedIn && (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        )}
        <button type="button" onClick={firebase.signinWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};
