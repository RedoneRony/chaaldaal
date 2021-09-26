import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./programmer.css";
// pass data using props from club js
function Programmer(props) {
  const { name, img, designation, age, weight, homeDistrict, salary } =
    props.programmer;
  return (
    <div className="programmer">
      <div>
        <img src={img} alt="" />
        <h4 className="programmer-name">{name}</h4>
        <p>
          <small>Designation: {designation}</small>
        </p>
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
        <p>Home District: {homeDistrict}</p>
        <p> Salary: {salary}</p>
        <br />
        {/* pass data from to programmer to cart using event handler */}
        <button
          onClick={() => props.handleAddToCart(props.programmer)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
        <div className="container social-icon">
          <div className="fb">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div className="twitter">
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmer;
