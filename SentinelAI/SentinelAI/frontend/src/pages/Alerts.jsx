import React, { useEffect, useState } from "react";
import { fetchAlerts } from "../services/api";
import AlertCard from "../components/AlertCard";

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAlerts = async () => {
      try {
        const response = await fetchAlerts();
        setAlerts(response);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    getAlerts();
  }, []);

  if (loading) {
    return <div>Loading alerts...</div>;
  }

  return (
    <div>
      <h1>Alerts Page</h1>
      <div>
        {alerts.map((alert, index) => (
          <AlertCard key={index} alert={alert} />
        ))}
      </div>
    </div>
  );
}

export default Alerts;