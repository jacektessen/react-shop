import React from "react";
import Product from "./Product";
import { items } from "../data";

const Products = props => {
  return (
    <div id="products" className="container">
      <hr />
      <form>
        <select type="select" name="select">
          <option>Sort by Price</option>
          <option>Lowest to Highest</option>
          <option>Highest to Lowest</option>
        </select>
      </form>
      <hr />
      <div className="list">
        {items.map(item => {
          const { id } = item;
          return <Product key={id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
