import Cart from "../products/Cart";
import Navbar from "./Navbar";
import SiteIdentity from "./SiteIdentity";
const Header = () => {
  return (
    <header className="w-full py-4 border-b flex justify-between items-center px-10">
      <SiteIdentity />
      <Navbar />
      <Cart />
    </header>
  );
};

export default Header;
