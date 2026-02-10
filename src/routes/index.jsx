import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Store from "../pages/Store";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Store />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
