import React from "react";
import "../components/style.css";

const Register = () => {
  return (
    <>
      <div className="container form register">
        <form>
          <p className="title">Sing Up</p>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button color="info">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Register;
