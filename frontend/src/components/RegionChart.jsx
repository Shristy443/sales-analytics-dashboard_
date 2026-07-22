// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const RegionChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:5000/region-sales")
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="chart-container">
//       <h2>Region-wise Sales</h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="Region" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="Sales" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RegionChart;

import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RegionChart = ({ year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = year
      ? `${BASE_URL}/region-sales?year=${year}`
      : `${BASE_URL}/region-sales`;

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [year]);

  return (
    <div className="chart-container">
      <h2>Region-wise Sales</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="Region" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="Sales" fill="#240046" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionChart;