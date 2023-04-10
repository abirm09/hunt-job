import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";

export const LoaderDataContext = createContext({});

const App = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <LoaderDataContext.Provider value={data}>
        <Header />
        <div style={{ minHeight: "calc(100vh - 64px)" }}>
          <Outlet />
        </div>
      </LoaderDataContext.Provider>
    </>
  );
};

export default App;
