import "./SignUpFormStyles.css";
import React, { useState } from "react";

export const SignUpForm = () => {
  const [showSignup, setShowSignup] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSignup = (event) => {
    event.preventDefault();

    setShowSignup(false);
  };

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="form-container">
      {showSignup ? (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <input placeholder="Name" type="text" name="name" id="name" />
            <input placeholder="Email" type="email" name="email" id="email" />
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Log In
            </button>
          </p>
        </div>
      ) : (
        <div>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" name="email" id="email" />
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Sign Up
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
