import React from "react";
import { Button, Input } from "reactstrap";

const Contact = () => {
  return (
    <>
      <div className="container form_ contact">
        <form>
          <p className="title">Contact Us</p>
          <Input type="text" placeholder="name" />
          <Input type="email" placeholder="email" />
          <Input type="textarea" placeholder="your message" rows="5" />
          <Button color="info">Send</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
