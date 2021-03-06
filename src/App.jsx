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
  return values;
});
export default function App(props) {
  const [state, setState] = useState({
    info: "there is not the product",
    cartNumber: 0,
    products: values,
    totalPrice: 0,
  });
  const [cart, setCart] = useState([]);
  var newproducts = [...state.products];
  var newCart = cart;
  var sum;
  useEffect(() => {
    const data1 = localStorage.getItem("state");
    if (data) {
      setState(JSON.parse(data1));
    }
    const data2 = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data2));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e, id) => {
    newproducts.map((elem, i) => {
      if (id - 1 === i) {
        elem.value = e.target.value;
      }
      return newproducts;
    });
  };
  const onClickButton = (id) => {
    newproducts.map((elem, i) => {
      if (!elem.buttonIsClick) {
        if (id - 1 === i) {
          if (elem.count > 0) {
            elem.buttonIsClick = true;
            cart.push(elem);
            sum = 0;
            cart.map((elem) => {
              sum = sum + Number(elem.price.slice(0, -1));
              return sum;
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
      return newproducts;
    });

    setState((prevState) => ({
      ...prevState,
      products: newproducts,
    }));
  };
  const decrement = (index) => {
    sum = 0;
    newproducts.map((elem, i) => {
      if (index - 1 === i) {
        if (elem.value === 1) {
          var newCart1 = newCart.filter((elem) => elem.id !== index);
          elem.buttonIsClick = false;
          newCart1.map((elem) => {
            let sum1 = elem.price.slice(0, -1);
            sum = sum + Number(sum1) * elem.value;
            return sum;
          });
          setState((prevState) => ({
            ...prevState,
            cartNumber: state.cartNumber - 1,
            totalPrice: sum,
          }));
          setCart(newCart1);
        } else {
          elem.value = elem.value - 1;
          newCart.map((elem) => {
            let sum1 = elem.price.slice(0, -1);
            sum = sum + Number(sum1) * elem.value;
            return sum;
          });
        }
      }
      return newproducts;
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
        if (elem.value !== elem.count) {
          elem.value = elem.value + 1;
        }
      }
      sum = 0;
      cart.map((elem) => {
        let sum1 = elem.price.slice(0, -1);
        sum = sum + Number(sum1) * elem.value;
        return sum;
      });
      setState((prevState) => ({
        ...prevState,
        products: newproducts,
        totalPrice: sum,
      }));
      return newproducts;
    });
    setState((prevState) => ({
      ...prevState,
      products: newproducts,
      totalPrice: sum,
    }));
  };
  const handleDelete = (itemId) => {
    sum = 0;
    var newCart1 = newCart.filter((item) => item.id !== itemId);
    newproducts.map((elem, i) => {
      if (itemId - 1 === i) {
        elem.value = 1;
        elem.buttonIsClick = false;
      }
      return newproducts;
    });
    setCart(newCart1);
    newCart1.map((elem) => {
      let sum1 = elem.price.slice(0, -1);
      sum = sum + Number(sum1) * elem.value;
      return sum;
    });
    setState((prevState) => ({
      ...prevState,
      totalPrice: sum,
      products: newproducts,
      cartNumber: state.cartNumber - 1,
    }));
  };
  const onClickPay = () => {
    let payMsg = document.getElementById("pay");
    payMsg.textContent = `yoe must pay ${state.totalPrice}$`;
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
              onClickPay={onClickPay}
            />
          )}
        />
        <Redirect to={"/"} />
      </div>
    </Router>
  );
}
