import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/Footer";
import CartDetailsPopUp from "../components/products/CartDetailsPopUp";
import useAppStore from "../state/appStore";

const Layout = () => {
  const appState = useAppStore();
  const showCartDetails = appState.showCartDetails;
  return (
    <main className="relative text-gray-700 w-full flex flex-col justify-between items-center min-h-screen">
      <Header />
      <CartDetailsPopUp />
      <div className="w-full flex flex-col justify-start items-center">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
