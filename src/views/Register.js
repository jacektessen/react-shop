import React from "react";
import "../components/style.css";
import { Button, Input } from "reactstrap";

const Register = () => {
  return (
    <>
      <div className="container form_">
        <form>
          <p className="title">Sing Up</p>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button color="info">Sign up</Button>
        </form>
      </div>
    </>
  );
};

export default Register;
