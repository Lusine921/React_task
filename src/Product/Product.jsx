import React from "react";
import ProductButton from "./ProductButton";
import ProductForm from "./ProductForm";

export default function Product(props) {
  return (
    <div title={props.title} className="product">
      <div className="product-min">
        <img src={props.img} alt={props.titel} />
        <p>{props.description}</p>
      </div>
      <h4>{props.price}</h4>

      {props.isclick ? (
        <ProductForm
          handleChange={props.handleChange}
          id={props.id}
          value={props.value}
          onSubmit={props.onSubmit}
          increment={props.increment}
          decrement={props.decrement}
        />
      ) : (
        <ProductButton id={props.id} onClickButton={props.onClickButton} />
      )}

      {props.showInfo && <h3> {props.info}</h3>}
    </div>
  );
}
