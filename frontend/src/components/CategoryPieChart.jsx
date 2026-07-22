import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#9d4edd", "#7209b7", "#c77dff", "#5a189a"];

const CategoryPieChart = ({ year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = year
         ? `${BASE_URL}/category-sales?year=${year}`
    : `${BASE_URL}/category-sales`;

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [year]);

  return (
    <div className="chart-container">
      <h2>Sales Distribution by Category</h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="Sales"
            nameKey="Category"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;