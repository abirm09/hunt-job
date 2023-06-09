import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";

export const LoaderDataContext = createContext({});

export const handleApplyBtn = job => {};
const App = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <LoaderDataContext.Provider value={data}>
        <Header />
        <div style={{ minHeight: "calc(100vh - 64px)" }}>
          <Outlet />
        </div>
      </LoaderDataContext.Provider>
      <Toaster />
    </>
  );
};

export default App;
