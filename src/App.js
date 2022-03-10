import "./styles.css";
import { Nav } from "./Nav";
import { usePage } from "./page-context";
import { ProductListing } from "./ProductListing";
import { CartPage } from "./CartPage";

export default function App() {
  const { page } = usePage();

  return (
    <div className="App">
      <Nav />
      {page === "product-listing" && <ProductListing />}
      {page === "CartPage" && <CartPage />}
    </div>
  );
}
