import React, { useState, useEffect } from "react";
import Nav from "./NavBar/NavBar";
import Product from "./Product/Product";
import Header from "./Header/Header";
import Cart from "./Header/Cart";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Data from "./products.json";

var values = [];
Data.array.map((elem, index) => {
  values.push({
    id: elem.id,
    title: elem.title,
    description: elem.description,
    price: elem.price,
    img: elem.img,
    count: elem.count,
    value: 1,
    buttonIsClick: false,
    minValue: 1,
    showInfo: false,
  });
});
export default function App(props) {
  const [state, setState] = useState({
    info: "ther is not product",
    cartNumber: 0,
    products: values,
    right: false,
    left: false,
    cartProducts: [],
    totalPrice: 0,
    menuList: [
      "productTYpe1",
      "productTYpe2",
      "productTYpe3",
      "productTYpe4",
      "productTYpe5",
      "productTYpe6",
    ],
  });

  const toggleSlider1 = (slider1, open) => () => {
    setState({ ...state, [slider1]: open });
  };
  const toggleSlider2 = (slider2, open) => () => {
    setState({ ...state, [slider2]: open });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onClickButtom = (index) => {
    var newproducts = [...state.products];
    values.map((elem, i) => {
      if (index - 1 === i) {
        if (elem.count > 0) {
          elem.buttonIsClick = true;
          var newCartProducts = [...state.cartProducts];
          let newCartProducts1 = newCartProducts.push(values[i]);
          newCartProducts = newCartProducts1;
          newproducts = values;
          setState((prevState) => ({
            ...prevState,
            cartNumber: state.cartNumber + 1,
          }));
        } else {
          elem.showInfo = !elem.showInfo;
        }
      }
    });
    console.log(state.cartProducts);
  };
  const decrement = (index) => {
    var newproducts = [...state.products];
    values.map((elem, i) => {
      if (index - 1 === i) {
        if (elem.value === 1) {
          elem.buttonIsClick = false;
          setState((prevState) => ({
            ...prevState,
            cartNumber: state.cartNumber - 1,
          }));
          const newCartProducts = [...state.cartProducts];
          newCartProducts = newCartProducts.splice(
            newCartProducts.findIndex(elem),
            1
          );
        } else {
          elem.value = elem.value - 1;
        }
      }
    });
    newproducts = values;
    console.log(state);
  };
  console.log(state);
  console.log(state.products);
  const increment = (index) => {
    var newproducts = [...state.products];
    values.map((elem, i) => {
      if (index - 1 === i) {
        if (elem.value != elem.count) {
          elem.value = elem.value + 1;
        }
      }
    });
    newproducts = values;
    console.log(state);
  };
  console.log(state.cartNumber);

  return (
    <Router>
      <div className="main">
        <CssBaseline />
        <Nav />
        <Route path="/" render={() => <h1> Home page </h1>} />
        <Header
          onsubmit={onSubmit}
          cartNumber={state.cartNumber}
          toggleSlider1={toggleSlider1}
          toggleSlider2={toggleSlider2}
          right={state.right}
          left={state.left}
          menuList={state.menuList}
          products={state.productsValue}
          cartProducts={state.cartProducts}
        />
        <section>
          {state.products.map((elem) => {
            return (
              <Product
                id={elem.id}
                key={elem.id}
                img={elem.img}
                title={elem.title}
                price={elem.price}
                count={elem.count}
                description={(e) => elem.description(e)}
                onClickbutton={(e) => onClickButtom(e)}
                increment={(e) => increment(e)}
                value={elem.value}
                onsubmit={onSubmit}
                decrement={decrement}
                cartNumber={state.cartNumber}
                isclick={elem.buttonIsClick}
                info={state.info}
                showInfo={elem.showInfo}
              />
            );
          })}
        </section>
      </div>
    </Router>
  );
}
