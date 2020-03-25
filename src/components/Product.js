import React from "react";
import "./style.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardFooter,
  Input
} from "reactstrap";

const Product = ({ item: { Title, Price, Description, url } }) => {
  return (
    <div className="product">
      <Card>
        <CardImg top width="100%" alt="product" src={url} />
        <CardBody>
          <CardText className="title">{Title}</CardText>
          <CardText>
            {Description.length < 20
              ? Description
              : `${Description.substring(0, 25)}...`}
          </CardText>
          <CardFooter>
            <Button color="info">Add to Cart</Button>
            <Input type="number" className="quantity" placeholder="1" />
            <CardText className="price">${Price}</CardText>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
