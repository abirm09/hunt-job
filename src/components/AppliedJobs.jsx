import React, { useContext, useEffect, useState } from "react";
import { LoaderDataContext } from "../App";
import { getAddedJob } from "../utility/fakedb";
import DisplayAppliedJob from "./DisplayAppliedJob/DisplayAppliedJob";

const AppliedJobs = () => {
  const { allJobs } = useContext(LoaderDataContext || []);
  const [jobs, setJobs] = useState(allJobs);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(appliedJobs);
  // find applied jobs

  useEffect(() => {
    const addedJobId = getAddedJob();
    let addedJob = [];
    for (const job in addedJobId) {
      const isAdded = jobs.find(job2 => job2.job_id == job);
      if (isAdded) {
        addedJob.push(isAdded);
      }
    }
    setAppliedJobs(addedJob);
  }, [allJobs]);
  useEffect(() => {
    setFilteredJobs(appliedJobs);
  }, [appliedJobs]);
  return (
    <section>
      <div className="bg-zinc-100">
        <h2 className="section-title py-10">Applied Jobs</h2>
      </div>
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex justify-end my-10">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn bg-slate-100 text-black border-none hover:text-white m-1"
            >
              Filter
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {filteredJobs.map(job => (
            <DisplayAppliedJob key={job.job_id} data={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppliedJobs;
