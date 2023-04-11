import React, { useContext } from "react";
import { LoaderDataContext } from "../App";
import { Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const Statistics = () => {
  const { assignmentData } = useContext(LoaderDataContext || []);
  console.log(assignmentData);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center pt-10 font-extrabold">
        Assignment marks from assignment 1 to assignment 8.
      </h2>
      <div className="flex justify-center">
        <PieChart width={350} height={400}>
          <Pie
            dataKey="marks"
            isAnimationActive={false}
            data={assignmentData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          ></Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
