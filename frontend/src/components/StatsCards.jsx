import { useEffect, useState } from "react";
import axios from "axios";
import "./StatsCards.css";

const StatsCards = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/stats")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-card">
        <h3>👥 Customers</h3>
        <h2>{stats.customers}</h2>
      </div>

      <div className="stats-card">
        <h3>🛒 Products</h3>
        <h2>{stats.products}</h2>
      </div>

      <div className="stats-card">
        <h3>📦 Categories</h3>
        <h2>{stats.categories}</h2>
      </div>

      <div className="stats-card">
        <h3>🌍 Regions</h3>
        <h2>{stats.regions}</h2>
      </div>
    </div>
  );
};

export default StatsCards;