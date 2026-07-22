import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
const YearFilter = ({ onSelect }) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    axios
       .get(`${BASE_URL}/years`)
      .then((res) => setYears(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Select Year: </label>

      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">All Years</option>

        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;