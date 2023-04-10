import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
const DisplaySingleCart = ({ job }) => {
  const {
    job_id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;
  const navigate = useNavigate();
  return (
    <div className="border p-6 space-y-4 rounded-lg">
      <figure>
        <img src={company_logo} alt={company_name} className="w-32" />
      </figure>
      <h2 className="font-extrabold text-2xl">{job_title}</h2>
      <p className="font-semibold text-xl text-slate-500">{company_name}</p>
      <button className="font-extrabold normal-case btn text-gradient border-gray-500 border">
        {remote_or_onsite}
      </button>
      <button className="ml-4 font-extrabold normal-case btn text-gradient border-gray-500 border">
        {fulltime_or_parttime}
      </button>
      <div className="flex gap-3 flex-wrap">
        <p className="flex font-semibold text-xl text-gray-500">
          <MapPinIcon className="h-6 w-6 " />
          {location}
        </p>
        <p className="flex font-semibold text-xl text-gray-500">
          <CurrencyDollarIcon className="h-6 w-6 " />
          salary : {salary}
        </p>
      </div>
      <button
        onClick={() => navigate(`jobs/${job_id}`)}
        className="btn cs-gradient border-none normal-case font-extrabold"
      >
        View Details
      </button>
    </div>
  );
};

export default DisplaySingleCart;
