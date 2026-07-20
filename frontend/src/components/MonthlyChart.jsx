import { useEffect, useState } from "react";
import axios from "axios";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 CartesianGrid,
 Tooltip,
 ResponsiveContainer
} from "recharts";

const MonthlyChart = ({ year }) => {
 const url = year
  ? `http://127.0.0.1:5000/monthly-sales?year=${year}`
  : "http://127.0.0.1:5000/monthly-sales";

axios.get(url).then((res) => setData(res.data));
useEffect(() => {
  // fetch data
}, [year]);
};

export default MonthlyChart;