import { useState } from "react";
import { useCart } from "./cart-context";

const Card = (props) => {
  const { itemsHandler } = useCart();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="vartical-card-component">
      <div className="card-skeleton border-black">
        <div className="imageContainer position-relative">
          <img className="image" src={props.ele.image} alt="" />
          <h3 className="card-content">{props.ele.name}</h3>
          <i className="far fa-heart heart-icon"></i>
        </div>

        <div className="content">
          <h5>{props.ele.price}</h5>
        </div>

        <div className="footer-button">
          <button
            className="card-button"
            onClick={() => {
              itemsHandler(props.ele, toggle);
              setToggle((prev) => !prev);
            }}
          >
            {toggle ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
