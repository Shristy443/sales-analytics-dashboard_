import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "./api";
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
  const [data, setData] = useState([]);
   useEffect(() => {
 const url = year
  ? `${BASE_URL}/monthly-sales?year=${year}`
  : `${BASE_URL}/monthly-sales`;

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [year]);
};

export default MonthlyChart;