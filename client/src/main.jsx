import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";
import Accueil from "./pages/Accueil";
import Login from "./pages/SeConnecter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Chemin par défaut
        element: <Accueil />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "accueil",
        element: <Accueil />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
