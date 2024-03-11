import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import ListProducts from "./pages/ListProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Header from "./pages/Header";

function Root() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
