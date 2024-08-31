import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./app/home/Home";
import Search from "./app/search/Search";
import App from "./app/App";
import OtpLogin from "./app/auth/components/otp-login/OtpLogin";
import VerifyOtp from "./app/auth/components/verify-otp/VerifyOtp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <OtpLogin />,
          },
          {
            path: "verify-otp",
            element: <VerifyOtp />,
          },
        ],
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
