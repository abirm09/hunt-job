import React from "react";

const JobCategory = ({ data }) => {
  const { img, title, available_job } = data;
  return (
    <div className="w-[310px] bg-slate-100 p-10 rounded-lg">
      <figure className="w-[70px] h-[70px] bg-indigo-100 flex justify-center items-center rounded-lg">
        <img src={img} alt={title} />
      </figure>
      <h2 className="mt-8 font-extrabold text-xl">{title}</h2>
      <p className="font-medium mt-2">{available_job}</p>
    </div>
  );
};

export default JobCategory;
