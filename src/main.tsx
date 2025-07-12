import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/home/page";
import CarsPage from "./pages/cars/page";
import "./styles.css";

const router = createBrowserRouter([
  { element: <Layout />, children: [
      { path: "/", element: <HomePage /> },
      { path: "/cars", element: <CarsPage /> },
    ]},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);