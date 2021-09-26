import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
function Cart(props) {
  const { cart } = props || {};
  // total cost calculation
  const totalReducer = (prevValue, currentValue) =>
    prevValue + currentValue.salary;
  const totalSalary = cart.reduce(totalReducer, 0);

  return (
    <div>
      {/* cart all data */}
      <h6>
        <FontAwesomeIcon icon={faUser} /> Programmers Added : {cart.length}
      </h6>
      <h6>
        Total Cost:<span>$</span> {totalSalary}{" "}
      </h6>
      <ul>
        {cart.map((programmer, i) => (
          <div className="programmer-list" key={i}>
            <img src={programmer.img} alt="" />
            <p>{programmer.name}</p>
          </div>
        ))}
      </ul>

      <button type="button" className="btn btn-primary">
        Buy Now
      </button>
    </div>
  );
}

export default Cart;
