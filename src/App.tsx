import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
