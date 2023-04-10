import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
const Error = () => {
  return (
    <div
      className=" bg-slate-100 flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="flex flex-col items-center space-y-5">
        <FaceFrownIcon className="h-28 w-28 text-gray-400" />
        <h2 className="text-red-700 text-7xl">404</h2>
        <p className="text-3xl font-bold text-slate-600">Page not found.</p>
      </div>
    </div>
  );
};

export default Error;
