import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";

const LogIn = () => {
  return (
    <>
      <div className="container form_">
        <form>
          <p className="title">Log In</p>
          <Input type="text" placeholder="name" />
          <Input type="password" placeholder="password" />
          <Button color="info">Log In</Button>
          <p>
            Don't have an account? <Link to="/Register">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LogIn;
