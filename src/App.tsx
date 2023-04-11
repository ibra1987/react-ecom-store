import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
