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
import ArticlesPage from "./components/Articles/ArticlesPage";
import SingleArticlePage from "./components/Articles/SingleArticlePage";

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
    },
    {
        path:"/articles",
        element: <ArticlesPage />
    },
    {
        path:"/articles/:itemId",
        element: <SingleArticlePage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
