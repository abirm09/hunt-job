import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Error from "./components/Error/Error";
import AppliedJobs from "./components/AppliedJobs";
import { loadAllData } from "./loaders/loadAllData";
import Blog from "./components/Blog";
import SingleJob from "./components/SingleJob/SingleJob";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loadAllData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "jobs/:jobId",
        element: <SingleJob />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
