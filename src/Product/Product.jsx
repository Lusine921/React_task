import React from "react";
import ProductButton from "./ProductButton";
import ProductForm from "./ProductForm";
import S from "./Product.module.css";

export default function Product(props) {
  console.log(props);
  return (
    <div title={props.title}>
      <div>
        <img
          src={`${props.img}`}
          alt={props.titel}
          style={{ maxWidth: "250px" }}
        />
        <p>{props.description}</p>
        <h4>{props.price}</h4>
      </div>
      {props.isclick ? (
        <ProductForm
          id={props.id}
          value={props.value}
          onSubmit={props.onsubmit}
          increment={props.increment}
          decrement={props.decrement}
        />
      ) : (
        <ProductButton id={props.id} onClickButton={props.onClickbutton} />
      )}
      <h3> {props.showInfo && props.info}</h3>
    </div>
  );
}
