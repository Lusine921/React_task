import React from "react";
import S from "./ProductForm.module.css";

export default function ProductForm(props) {
  return (
    <div className={S.ProductForm}>
      <form onSubmit={props.onSubmit}>
        <button onClick={() => props.decrement(props.id)}>-</button>
        <input value={props.value} />
        <button onClick={() => props.increment(props.id)}>+</button>
      </form>
    </div>
  );
}
