import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

const InCartItem = () => {
  return (
    <div className="item">
      <img alt="" />
      <p className="title">Bear</p>
      <p className="price">$50</p>
      <div className="counter">
        <FontAwesomeIcon icon={faMinusSquare} color="#17a2b8" />
        <p>2</p>
        <FontAwesomeIcon icon={faPlusSquare} color="#17a2b8" />
      </div>
      <FontAwesomeIcon icon={faTrashAlt} color="#ca3433" />
    </div>
  );
};

export default InCartItem;
