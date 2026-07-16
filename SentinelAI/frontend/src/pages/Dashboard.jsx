import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import StatCard from "../components/StatCard";
import ActivityTable from "../components/ActivityTable";
import { fetchAlerts, fetchUserStats } from "../services/api";

function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [userStats, setUserStats] = useState({ totalUsers: 0, threatsToday: 0, highRiskUsers: 0 });

  useEffect(() => {
    const getAlerts = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
    };

    const getUserStats = async () => {
      const stats = await fetchUserStats();
      setUserStats(stats);
    };

    getAlerts();
    getUserStats();
  }, []);

  const data = [
    { day: "Mon", risk: 20 },
    { day: "Tue", risk: 35 },
    { day: "Wed", risk: 60 },
    { day: "Thu", risk: 40 },
    { day: "Fri", risk: 85 },
    { day: "Sat", risk: 65 },
    { day: "Sun", risk: 30 },
  ];

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="cards">
        <StatCard title="Total Users" value={userStats.totalUsers} />
        <StatCard title="Threats Today" value={userStats.threatsToday} />
        <StatCard title="High Risk Users" value={userStats.highRiskUsers} />
      </div>

      <h2>🚨 Live Alerts</h2>
      <ActivityTable alerts={alerts} />

      <h2 style={{ marginTop: "40px" }}>📈 Weekly Risk Analysis</h2>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid stroke="#555" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="risk" stroke="#ff0000" />
      </LineChart>
    </div>
  );
}

export default Dashboard;