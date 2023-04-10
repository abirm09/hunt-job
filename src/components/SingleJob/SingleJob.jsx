import React, { useContext } from "react";
import { LoaderDataContext } from "../../App";
import Header from "../Header/Header";

const SingleJob = () => {
  //   const data = useContext(LoaderDataContext || []);
  //   console.log(data);
  return (
    <div>
      <Header />
      <h2>Single job</h2>
    </div>
  );
};

export default SingleJob;
