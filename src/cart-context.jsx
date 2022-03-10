import { useContext, createContext, useState } from "react";
import { usePage } from "./page-context";

const cartContext = createContext(4);

const CartProvider = ({ children }) => {
  const { setPage } = usePage();
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const itemsHandler = (ele, toggle) => {
    if (toggle === false) {
      setNumberOfItems((prev) => prev + 1);
      setCartProducts([...cartProducts, { ...ele, quantity: 1 }]);
      console.log(ele);
      console.log("checking", cartProducts);
    } else {
      setPage("CartPage");
    }
  };

  // let addedPrice = 0;
  // let decreasedPrice = 0;

  const ProductQuantityHandler = (ele, flag) => {
    if (flag === "increase") {
      setCartProducts(
        cartProducts.map((element) => {
          return ele.id === element.id
            ? { ...ele, quantity: ele.quantity + 1 }
            : element;
        })
      );
    } else if (flag === "decrease") {
    }
  };
  return (
    <cartContext.Provider
      value={{
        numberOfItems,
        itemsHandler,
        cartProducts,
        ProductQuantityHandler
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
