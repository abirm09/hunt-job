import React from "react";
import user from "../assets/userPic.png";

const Home = () => {
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
                <img src={user} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
