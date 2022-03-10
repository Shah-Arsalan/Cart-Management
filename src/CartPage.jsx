import { useCart } from "./cart-context";
import { CartPageCard } from "./CartPageCard";

const CartPage = () => {
  const { cartProducts, numberOfItems } = useCart();
  const priceOfItems = cartProducts.reduce(
    (prev, curr) => prev + Number(curr.price) * Number(curr.quantity),
    0
  );

  console.log(priceOfItems);
  return (
    <div>
      <div className="cart-heading">
        <h1 className="small-heading-text flex-justify-center margin-1rem">
          My cart({numberOfItems})
        </h1>
      </div>

      <div className="price-card">
        <div className="card-heading">
          <h2>Price Details</h2>
        </div>

        <div className="price-calculation">
          <div className="price-components display-flex">
            <p>Price({numberOfItems})</p>
            <p> {priceOfItems}</p>
          </div>
          <div className="price-components display-flex">
            <p>Discount</p>
            <p>100</p>
          </div>
          <div className="price-components display-flex">
            <p>Delivery</p>
            <p>200</p>
          </div>
        </div>

        <div className="total-amount display-flex">
          <h3>Toatal Amount</h3>
          <p>{priceOfItems - 100 + 200}</p>
        </div>

        <p>you will save {100} in this order</p>

        <button className="primary-button">Place order</button>
      </div>

      {cartProducts.map((ele) => {
        return <CartPageCard ele={ele} />;
      })}
    </div>
  );
};

export { CartPage };
