import React, { useContext, useEffect, useState } from "react";
import { LoaderDataContext } from "../../App";
import { useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../utility/fakedb";
const SingleJob = () => {
  const data = useContext(LoaderDataContext || []);
  const { jobId } = useParams();
  const [singleCartData, setSingleCartData] = useState({});
  useEffect(() => {
    const cartData = data.allJobs.find(dd => dd.job_id == jobId);
    setSingleCartData(cartData);
  }, [jobId]);
  const {
    job_id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = singleCartData;
  const applyNowHandler = id => {
    addToDb(id);
  };
  return (
    <>
      <div className="bg-zinc-100">
        <h2 className="section-title py-20">Job Details</h2>
      </div>
      <div className="max-w-7xl mx-auto px-2 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center">
          <div className="col-span-3 space-y-5 mr-0 lg:mr-5">
            <p>
              <span className="font-extrabold">Job description : </span>
              <span className="font-medium text-slate-500">
                {job_description}
              </span>
            </p>
            <div>
              <h2 className="font-extrabold">Job Responsibility :</h2>
              <ol className="list-decimal font-medium text-slate-500">
                {job_responsibility
                  ? job_responsibility.map((job, index) => (
                      <li key={index} className="ml-7">
                        {job}
                      </li>
                    ))
                  : ""}
              </ol>
            </div>
            <div>
              <h2 className="font-extrabold">Educational Requirements:</h2>
              <p>{educational_requirements}</p>
            </div>
            <div>
              <h2 className="font-extrabold">Experiences:</h2>
              <p>{experiences}</p>
            </div>
          </div>
          <div className="col-span-2 mt-10 lg:mt-0">
            <div className="bg-zinc-100 p-4 rounded-lg mx-auto block">
              <h2 className="font-extrabold text-xl">Job details</h2>
              <hr className="mt-3 border border-zinc-300" />
              <div className="mt-5 space-y-3">
                <p className="flex font-medium text-xl text-gray-500 items-center">
                  <CurrencyDollarIcon className="h-6 w-6 mr-5" />
                  <span>
                    <span className="text-zinc-700 font-bold">salary :</span>
                    {salary} (per Month)
                  </span>
                </p>
                <p className="flex font-medium text-xl text-gray-500 ">
                  <CalendarDaysIcon className="h-6 w-6 mr-5" />
                  <span>
                    <span className="text-zinc-700 font-bold">
                      Job title :{" "}
                    </span>
                    {job_title}
                  </span>
                </p>
              </div>
              <h2 className="font-extrabold text-xl mt-10">
                Contact Information
              </h2>
              <hr className="mt-3 border border-zinc-300" />
              <div className="mt-5 space-y-4">
                <p className="flex font-medium text-xl text-gray-500 ">
                  <PhoneIcon className="h-6 w-6 mr-5" />
                  <span className="text-zinc-700 font-bold">Phone : </span>
                  {contact_information && contact_information.phone}
                </p>
                <p className="flex font-medium text-xl text-gray-500 ">
                  <EnvelopeIcon className="h-6 w-6 mr-5" />
                  <span className="text-zinc-700 font-bold">Email : </span>
                  {contact_information && contact_information.email}
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
            <button
              onClick={() => applyNowHandler(job_id)}
              className="btn cs-gradient w-full mt-5 normal-case"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
