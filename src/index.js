import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AboutPage from "./components/About/AboutPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ServicesPage from "./components/Services/ServicesPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />
    },
    {
        path:"/about",
        element:<AboutPage />
    },
    {
        path:"/services",
        element: <ServicesPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
