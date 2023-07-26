import Navabar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

function Home() {
  return (
    <div>
      <Navabar>
        <ProductList />
      </Navabar>
    </div>
  );
}

export default Home;
