import React from "react";
import Product from "./Product";
import Header from "../Header/Header";

export default function Products(props) {
  return (
    <div>
      <Header cartNumber={props.cartNumber} />
      <section>
        {props.products.map((elem) => {
          return (
            <Product
              id={elem.id}
              key={elem.id}
              img={elem.img}
              title={elem.title}
              price={elem.price}
              count={elem.count}
              description={elem.description}
              onClickButton={props.onClickButton}
              increment={props.increment}
              value={elem.value}
              onSubmit={props.onSubmit}
              handleChange={props.handleChange}
              decrement={props.decrement}
              cartNumber={props.cartNumber}
              isclick={elem.buttonIsClick}
              info={props.info}
              showInfo={elem.showInfo}
              cart={props.cart}
            />
          );
        })}
      </section>
    </div>
  );
}
