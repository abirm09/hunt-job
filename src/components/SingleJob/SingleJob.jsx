import React, { useContext, useEffect, useState } from "react";
import { LoaderDataContext } from "../../App";
import { useParams } from "react-router-dom";
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
  } = singleCartData;
  return (
    <div className="max-w-7xl mx-auto px-2">
      <h2>{job_title}</h2>
    </div>
  );
};

export default SingleJob;
