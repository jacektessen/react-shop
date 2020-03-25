import React from "react";

const ProductDetail = ({ location }) => {
  const { Title, Price, Description, url } = location.state.product;

  return (
    <div className="container">
      <p>{Title}</p>
      <p>{Price}</p>
      <p>{Description}</p>
      <img src={url} alt="" />
    </div>
  );
};

export default ProductDetail;
