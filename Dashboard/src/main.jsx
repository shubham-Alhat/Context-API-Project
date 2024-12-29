import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Loginpage from "./components/Loginpage";
import Home from "./components/Home";
import Profile from "./components/profile";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import UserContextProvider from "./Contexts/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
