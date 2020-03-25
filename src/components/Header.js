import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = () => {
  return (
    <Jumbotron>
      <Container>
        <h1 className="display-3">Buy a Bear</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa
          odio beatae sapiente. Ipsum deleniti nesciunt molestias tenetur optio,
          eaque corporis vero esse provident praesentium itaque quas temporibus
          consequatur porro.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
