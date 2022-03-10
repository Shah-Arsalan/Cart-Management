import { useCart } from "./cart-context";

const CartPageCard = ({ ele }) => {
  const { name, image, price, quantity } = ele;
  const { ProductQuantityHandler, deleteProduct } = useCart();

  return (
    <div>
      <div className="cart-container margin-1rem">
        <div className="product-card-container">
          <div className="horizontal-card-component">
            <div className="card-skeleton horizontal-card border-black ">
              <div className="horizontal-image-container position-relative">
                <img
                  className="image-horizontal"
                  src={image}
                  alt="product-icon"
                />
                <i className="far fa-heart heart-icon heart-horizontal"></i>
              </div>

              <div className="horizontal-card-content">
                <h3>{name}</h3>
                <h4>{price}</h4>
                <p>50% off</p>
                <div className="quantity">
                  <p>quantity:</p>
                  <button
                    onClick={() => ProductQuantityHandler(ele, "increase")}
                    className="quantity-button"
                  >
                    +
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => ProductQuantityHandler(ele, "decrease")}
                    className="quantity-button"
                  >
                    -
                  </button>
                </div>

                <button className="horizontal-card-buttons button-cart">
                  Move to wishlist
                </button>

                <button
                  onClick={() => deleteProduct(ele)}
                  className="horizontal-card-buttons button-cart"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartPageCard };
