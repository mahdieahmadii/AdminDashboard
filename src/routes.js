import Home from "./pages/Home/index.jsx";
import Users from "./pages/Users/index.jsx";
import NewUser from "./pages/NewUser/index.jsx";
import Products from "./pages/Products/index.jsx";
import Product from "./pages/Product/index.jsx";

let routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/users", element: <Users /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <Product /> },
];

export default routes;
