import { useCart } from "./cart-context";
import { usePage } from "./page-context";

const Nav = () => {
  const { setPage } = usePage();
  const { numberOfItems } = useCart();

  return (
    <div className="nav-container white">
      <div>
        <div href="/index.html">
          <img src="/images/Follow the sun. (1)(50).png" alt="" />
        </div>
      </div>

      <div className="navbarsearch">
        <input className="search__box" type="search" placeholder="Search" />
        <span className="search__icon">
          <i className="fas fa-search"></i>
        </span>
      </div>

      <div className="icons display-flex">
        <div href="/WebPages/logout/logout.html">
          <button className="primary-button">LogOut</button>
        </div>
        <div className="relative-button-container">
          <div
            onClick={() => setPage("CartPage")}
            href="/WebPages/cart/cart.html"
          >
            <i className="fas fa-shopping-cart"></i>
          </div>
          <p className="button-badge icon-badge">{numberOfItems}</p>
        </div>
        <div className="relative-button-container">
          <div href="/WebPages/wishlist/wishlist.html">
            <i className="fas fa-heart"></i>
          </div>
          <p className="button-badge icon-badge">4</p>
        </div>
      </div>
    </div>
  );
};

export { Nav };
