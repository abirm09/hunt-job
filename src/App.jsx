import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
