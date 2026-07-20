import { useEffect, useState } from "react";
import axios from "axios";
import SummaryCards from "../components/SummaryCards";
import MonthlyChart from "../components/MonthlyChart";
import CategoryChart from "../components/CategoryChart";
import "./Dashboard.css";
import TopProducts from "../components/TopProducts";
import RegionChart from "../components/RegionChart";
import SearchProduct from "../components/SearchProduct";
import CategoryPieChart from "../components/CategoryPieChart";
import Footer from "../components/Footer";
import YearFilter from "../components/YearFilter";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";


const Dashboard = () => {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("");

  useEffect(() => {
    setLoading(true);
     const url = year
    ? `http://127.0.0.1:5000/summary/${year}`
    : "http://127.0.0.1:5000/summary";
    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data);
        setSummary(response.data);
      })

      .catch((error) => {
        console.error("Error:", error);
      })
            .finally(()=>{
setLoading(false);
});
  }, [year]);

  return (
    <><Navbar />
     <div className="dashboard">
      

    <h1>Sales Analytics Dashboard</h1>


 <div className="year-filter">
    
        <YearFilter onSelect={setYear} />
    </div>

<SummaryCards summary={summary}/>

<StatsCards />
    <div className="chart-grid">

        <MonthlyChart year={year}/>

    </div>
      <div className="two-chart-grid">
  <div className="chart-box">
    <CategoryChart year={year} />
  </div>

  <div className="chart-box">
    <RegionChart year={year} />
  </div>
</div>
    <div className='chart-grid'>
      <TopProducts />
    </div>
   
<div className="chart-container">
   <SearchProduct />
</div>

<div className="chart-container">
  <CategoryPieChart year={year} />
</div>

<Footer />
</div>
</>
  )
  
};
export default Dashboard;


