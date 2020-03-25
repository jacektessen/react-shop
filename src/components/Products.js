import React from "react";
import Product from "./Product";
import { Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Products = props => {
  const { products } = props;
  console.log(products);
  return (
    <div classname="products">
      <hr />
      <Form className="container">
        <Input type="select" name="select" id="priceSelect">
          <option>Sort by Price</option>
          <option>Lowest to Highest</option>
          <option>Highest to Lowest</option>
        </Input>
      </Form>
      <hr />
      <div className="container d-flex flex-wrap justify-content-around">
        {products &&
          products.map(item => {
            const { id } = item;
            return <Product key={id} item={item} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products
  };
};

export default compose(
  firestoreConnect(["products"]),
  connect(mapStateToProps)
)(Products);
