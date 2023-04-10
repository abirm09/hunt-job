import React, { useContext, useEffect, useState } from "react";
import user from "../assets/userPic.png";
import { LoaderDataContext } from "../App";
import DisplaySingleCart from "./DisplaySingleCart/DisplaySingleCart";
import JobCategory from "./JobCategory";

const Home = () => {
  const { allJobs, jobCategory } = useContext(LoaderDataContext || {});
  const [jobs, setJobs] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [showSix, setShowSix] = useState(true);
  useEffect(() => {
    setJobs(allJobs);
    setCategoryData(jobCategory);
  }, [allJobs]);
  return (
    <>
      <section className="bg-zinc-100">
        <div className="container mx-auto px-2">
          <div className="lg:grid grid-cols-2 items-center">
            <div className="col-span-1 space-y-5">
              <h2 className="font-extrabold text-4xl md:text-5xl lg:text-7xl">
                One Step Closer To Your
                <span className="text-gradient "> Dream Job</span>
              </h2>
              <p>
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="btn cs-gradient">Get Started</button>
            </div>
            <div className="col-span-1">
              <figure>
                <img src={user} alt="User" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 lg:pt-28">
        <div className="container mx-auto px-2">
          <h2 className="section-title">Job Category List</h2>
          <p className="section-subtitle mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
          <div className="flex justify-center gap-10 flex-wrap mt-9">
            {categoryData.map((category, index) => (
              <JobCategory key={index} data={category} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-20 lg:pt-28">
        <div className="container mx-auto px-2">
          <h2 className="section-title">Featured Jobs</h2>
          <p className="section-subtitle mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
          {/* display jobs */}
          <div className="max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {showSix
                ? jobs
                    .slice(0, 4)
                    .map(singleJob => (
                      <DisplaySingleCart
                        key={singleJob.job_id}
                        job={singleJob}
                      />
                    ))
                : jobs.map(singleJob => (
                    <DisplaySingleCart key={singleJob.job_id} job={singleJob} />
                  ))}
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setShowSix(!showSix)}
                className="btn cs-gradient"
              >
                {showSix ? "See All Jobs" : "See less"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
