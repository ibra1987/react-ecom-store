import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <main className="w-full flex flex-col justify-between items-center min-h-screen">
      <Header />
      <div className="w-full flex flex-col justify-start items-center">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
