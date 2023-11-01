import React from "react";
import "./GraficaTerapia.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export const GraficaTerapia = ({data}) => {

  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={[0, 10]} ticks={[0, 5, 10, 15]}/>
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="evaluation" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
