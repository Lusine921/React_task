import React from "react";
import ProductForm from "../Product/ProductForm";
import { Cancel } from "@material-ui/icons";
import S from "./Cart.module.css";
import Button from "@material-ui/core/Button";

export default function Cart(props) {
  return (
    <div className={S.cart}>
      <div className={S.cartProduct}>
        {props.cart.length !== 0 ? (
          props.cart.map((elem, i) => {
            return (
              <div key={elem.id}>
                <div
                  className="delet"
                  onClick={() => props.handleDelete(elem.id)}
                >
                  <Cancel />
                </div>
                <img src={elem.img} alt={elem.titel} />
                <h4>{elem.price}</h4>

                <ProductForm
                  value={elem.value}
                  onSubmit={props.onSubmit}
                  increment={props.increment}
                  decrement={props.decrement}
                  handleChange={props.handleChange}
                  id={elem.id}
                  key={elem.i}
                />
              </div>
            );
          })
        ) : (
          <h1>Cart is empty</h1>
        )}
      </div>
      <div className={S.second}>
        <h3> total price: {props.totalPrice}</h3>
        <Button
          onClick={() => props.onClickPay()}
          variant="contained"
          color="secondary"
        >
          Pay
        </Button>
        <p id="pay"></p>
      </div>
    </div>
  );
}
