import React from "react";
import img6 from "../images/bear (6).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

const InCartItem = () => {
  return (
    <div className="item">
      <img src={img6} alt="" />
      <p className="title">Bear</p>
      <p className="price">$50</p>
      <div className="counter">
        <FontAwesomeIcon icon={faMinusSquare} color="#17a2b8" />
        <p>2</p>
        <FontAwesomeIcon icon={faPlusSquare} color="#17a2b8" />
      </div>
    </div>
  );
};

export default InCartItem;
