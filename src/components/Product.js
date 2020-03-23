import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item: { title, price, description, img, id } }) => {
  return (
    <div id="product">
      <Link
        to={{
          pathname: `/ProductDetail/${id}`,
          state: {
            product: { title, price, description, img }
          }
        }}
      >
        <img src={img} alt="" />
        <p className="title">{title}</p>
      </Link>
      <p>
        {description.length < 20
          ? description
          : `${description.substring(0, 25)}...`}
      </p>
      <div className="footer">
        <button>Add to Cart</button>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default Product;
