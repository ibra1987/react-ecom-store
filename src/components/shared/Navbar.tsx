import { Link } from "react-router-dom";
const linkClass =
  " py-1 cursor-pointer transition delay-100 ease-in-out border-b border-b-white hover:border-b-gray-300";
const Navbar = () => {
  return (
    <nav className=" text-gray-700  ">
      <ul className="w-full flex justify-end items-center tracking-widest space-x-6 ">
        <li className={linkClass}>
          <Link to="/">Home</Link>
        </li>
        <li className={linkClass}>
          <Link to="/all-products">Products</Link>
        </li>
        <li className={linkClass}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
