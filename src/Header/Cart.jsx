import React from "react";
import ProductForm from "../Product/ProductForm";

export default function Cart(props) {
  return (
    <div>
      <div>
        <img
          src={`${props.img}`}
          alt={props.titel}
          style={{ maxWidth: "250px", borderRadius: "5px" }}
        />
        <p>{props.description}</p>
        <h4>{props.price}</h4>
      </div>
      <ProductForm
        id={props.id}
        value={props.value}
        onSubmit={props.onsubmit}
        increment={props.increment}
        decrement={props.decrement}
      />
      <h3>
        <b>total price </b> {props.totalPrice}
      </h3>
      <button>To pay</button>
      <div>delet</div>
    </div>
  );
}
