import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div className="container form login">
        <form>
          <p className="title">Log In</p>
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <button color="info">Log In</button>
          <p>
            Don't have an account? <Link to="/Register">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LogIn;
