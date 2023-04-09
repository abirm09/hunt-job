import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <h2 className="text-3xl">From root</h2>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
