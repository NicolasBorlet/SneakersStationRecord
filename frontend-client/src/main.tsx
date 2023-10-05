import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./shared/ui/ErrorPage.tsx";
import CartScreen from "./features/Cart/ui/screens/CartScreen.tsx";
import { RecoilRoot } from "recoil";
import ItemContainerLayout from "./features/Product/ui/layout/ItemContainerLayout.tsx";
import SneakersScren from "./features/Sneakers/ui/screen/SneakersScreen.tsx";
import AccountScreen from "./shared/ui/screen/AccountScreen.tsx";
import PayementScreen from "./features/Payement/ui/screens/PayementScreen.tsx";
import EventScreen from "./features/Events/ui/screens/EventScreen.tsx";
import VinylScreen from "./features/Vinyls/ui/screen/VinylScreen.tsx";
import AboutScreen from "./features/About/ui/screen/AboutScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "account",
    element: <AccountScreen />,
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
  {
    path: "sneakers",
    element: <SneakersScren />,
  },
  {
    path: "vinyles",
    element: <VinylScreen />,
  },
  {
    path: "payement",
    element: <PayementScreen />,
  },
  {
    path: "events",
    element: <EventScreen />,
  },
  {
    path: "about",
    element: <AboutScreen />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
