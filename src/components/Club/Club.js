import React, { useState, useEffect } from "react";
import Programmer from "../Programmer/Programmer";
import Cart from "../Cart/Cart";
import "./Club.css";
// import { Container } from "react-bootstrap";
function Club() {
  // declare programmer and car state
  const [programmers, setProgrammers] = useState([]);
  const [cart, setCart] = useState([]);
  // get data using useffect
  useEffect(() => {
    fetch("/programmer.json")
      .then((res) => res.json())
      .then((data) => {
        setProgrammers(data);
        // setDisplayProducts(data);
      });
  }, []);
  // cart handler
  const handleAddToCart = (programmer) => {
    const newCart = [...cart, programmer];
    setCart(newCart);
    // console.log(newCart);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* programmer data */}
          <div className="col-lg-10 card">
            {programmers.map((programmer) => (
              <Programmer
                key={programmer.key}
                programmer={programmer}
                handleAddToCart={handleAddToCart}
              ></Programmer>
            ))}
          </div>
          {/* cart data */}
          <div className="col-lg-2">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Club;
