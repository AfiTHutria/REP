import { Routes, Route } from "react-router-dom";
import Homepage from "../presentation/pages/homepage.jsx";
import CartPage from "../presentation/pages/CartPage.jsx";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/cart", element: <CartPage /> },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((r) => (
        <Route  path={r.path} element={r.element} />
      ))}
    </Routes>
  );
}
