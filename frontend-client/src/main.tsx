import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./shared/ui/ErrorPage.tsx";
import CartScreen from "./features/Cart/ui/screens/CartScreen.tsx";
import { RecoilRoot } from "recoil";
import ItemContainerLayout from "./features/Product/ui/layout/ItemContainerLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <CartScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <ItemContainerLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
