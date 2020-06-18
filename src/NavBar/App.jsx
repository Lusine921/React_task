import React, { useState, useEffect } from "react";
import Nav from "./NavBar/NavBar";
import Products from "./Product/Products";
import Cart from "./Header/Cart";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
var data = require("./products.json");
var values = [];
data.array.map((elem, index) => {
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
    cartNumber: null,
    products: values,
    right: false,
    left: false,
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

  const [cart, setCart] = useState([]);
  var newproducts = [...state.products];
  var newCart = cart;
  var sum = 0;
  console.log(newCart);

  const toggleSlider1 = (slider1, open) => () => {
    setState({ ...state, [slider1]: open });
  };
  const toggleSlider2 = (slider2, open) => () => {
    setState({ ...state, [slider2]: open });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e, id) => {
    newproducts.map((elem, i) => {
      if (id - 1 === i) {
        elem.value = e.target.value;
      }
    });
  };

  const onClickButton = (id) => {
    newproducts.map((elem, i) => {
      if (!elem.buttonIsClick) {
        if (id - 1 === i) {
          if (elem.count > 0) {
            elem.buttonIsClick = true;

            cart.push(elem);

            cart.map((elem) => {
              let sum1 = elem.price.slice(0, -1);
              sum = sum + Number(sum1) * elem.value;
            });

            setState((prevState) => ({
              ...prevState,
              cartNumber: state.cartNumber + 1,
              totalPrice: sum,
            }));
          } else {
            elem.showInfo = true;
          }
        }
      }
    });
    setState((prevState) => ({
      ...prevState,
      products: newproducts,
    }));
  };
  const decrement = (index) => {
    newproducts.map((elem, i) => {
      if (index - 1 === i) {
        if (elem.value === 1) {
          var newCart1 = newCart.filter((item) => item.id !== index);
          setCart(newCart1);

          elem.buttonIsClick = false;
          setState((prevState) => ({
            ...prevState,
            cartNumber: state.cartNumber - 1,
          }));
        } else {
          elem.value = elem.value - 1;
        }
      }
    });
    cart.map((elem) => {
      let sum1 = elem.price.slice(0, -1);
      sum = sum + Number(sum1) * elem.value;
    });
    setState((prevState) => ({
      ...prevState,
      products: newproducts,
      totalPrice: sum,
    }));
  };

  const increment = (index) => {
    newproducts.map((elem, i) => {
      if (index - 1 === i) {
        if (elem.value != elem.count) {
          elem.value = elem.value + 1;
        }
      }
    });
    cart.map((elem) => {
      let sum1 = elem.price.slice(0, -1);
      sum = sum + Number(sum1) * elem.value;
    });
    setState((prevState) => ({
      ...prevState,
      products: newproducts,
      totalPrice: sum,
    }));
  };
  const handleDelete = (itemId) => {
    var newCart1 = newCart.filter((item) => item.id !== itemId);
    newproducts.map((elem, i) => {
      if (itemId - 1 === i) {
        elem.buttonIsClick = false;
      }
    });
    setCart(newCart1);
    cart.map((elem) => {
      let sum1 = elem.price.slice(0, -1);
      sum = sum + Number(sum1);
    });
    setState((prevState) => ({
      ...prevState,
      products: newproducts,
      totalPrice: sum,
      cartNumber: state.cartNumber - 1,
    }));
    console.log(cart);
  };

  return (
    <Router>
      <div className="main">
        <CssBaseline />
        <Nav />
        <Route
          exact
          path="/"
          render={(props) => (
            <Products
              {...props}
              wrapper={state.wrapper}
              toggleSlider1={toggleSlider1}
              toggleSlider2={toggleSlider2}
              onClickButton={onClickButton}
              increment={increment}
              decrement={decrement}
              onSubmit={onSubmit}
              handleChange={handleChange}
              cartNumber={state.cartNumber}
              right={state.right}
              left={state.left}
              menuList={state.menuList}
              products={state.products}
              cart={cart}
              info={state.info}
            />
          )}
        />
        <Route
          path="/cart"
          render={(props) => (
            <Cart
              {...props}
              cart={cart}
              onSubmit={onSubmit}
              handleChange={handleChange}
              increment={increment}
              decrement={decrement}
              handleDelete={handleDelete}
              totalPrice={state.totalPrice}
            />
          )}
        />
        <Redirect to={"/"} />
      </div>
    </Router>
  );
}
