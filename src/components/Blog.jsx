import React, { useContext } from "react";
import { LoaderDataContext } from "../App";

const Blog = () => {
  const { answers } = useContext(LoaderDataContext || []);
  console.log(answers);
  return (
    <section>
      <div className="bg-zinc-100">
        <h2 className="section-title py-10">Blogs</h2>
      </div>
      <div className="max-w-7xl mx-auto px-3 mt-10">
        <ul className="list-decimal ml-5">
          {answers.map((answer, index) => (
            <li key={index} className="mb-5 font-extrabold">
              <h2 className="mb-2 ">{answer.question}</h2>
              <p className="font-medium text-zinc-600">{answer.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
