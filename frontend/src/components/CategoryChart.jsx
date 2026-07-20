// import { useEffect, useState } from "react";
// import axios from "axios";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer
// } from "recharts";

// const CategoryChart = ({ year }) => {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:5000/category-sales")
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 400,
//         background: "white",
//         padding: 20,
//         borderRadius: 10,
//         boxShadow: "0 2px 10px rgba(0,0,0,.1)"
//       }}
//     >
//       <h2>Category Sales</h2>

//       <ResponsiveContainer>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />

//           <XAxis dataKey="Category" />

//           <YAxis />

//           <Tooltip />

//           <Bar dataKey="Sales" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CategoryChart;

import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const CategoryChart = ({ year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = year
      ? `http://127.0.0.1:5000/category-sales?year=${year}`
      : "http://127.0.0.1:5000/category-sales";

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [year]);

  return (
    <div className="chart-container">
      <h2>Category-wise Sales</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="Category" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="Sales" fill="#3c096c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;