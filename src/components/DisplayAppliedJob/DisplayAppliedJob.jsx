import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
const DisplayAppliedJob = ({ data }) => {
  const {
    job_id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = data;
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mb-10">
      <div className="flex max-w-full justify-between gap-5 border w-max p-5 flex-wrap rounded-lg">
        <figure className="w-max h-max md:w-60 md:h-60 flex justify-center items-center p-5 mx-auto">
          <img src={company_logo} alt={company_name} />
        </figure>
        <div className="flex gap-10 flex-wrap ">
          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold">{job_title}</h2>
            <p className="font-semibold text-zinc-500">{company_name}</p>
            <button className="font-extrabold normal-case btn text-gradient border-gray-500 border">
              {remote_or_onsite}
            </button>
            <button className="ml-4 font-extrabold normal-case btn text-gradient border-gray-500 border">
              {fulltime_or_parttime}
            </button>
            <div>
              <p className="flex font-medium text-xl text-gray-500 items-center">
                <CurrencyDollarIcon className="h-6 w-6 mr-5" />
                <span>
                  <span className="text-zinc-700 font-bold">salary :</span>
                  {salary} (per Month)
                </span>
              </p>
              <p className="flex font-medium text-xl text-gray-500 ">
                <MapPinIcon className="h-6 w-6 mr-5" />
                <span>
                  <span className="text-zinc-700 font-bold">Location:</span>
                  {location}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate(`/jobs/${job_id}`)}
              className="cs-gradient btn"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppliedJob;
