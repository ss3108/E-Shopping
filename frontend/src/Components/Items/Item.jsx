import React from "react";
import "./Item.css";
import new_collections from "./../Assets/new_collections";

const Item = () => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price}</div>
        <div className="item-prices-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
