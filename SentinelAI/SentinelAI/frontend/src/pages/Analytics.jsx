import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { fetchAnalyticsData } from '../services/api';

function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAnalyticsData = async () => {
      const result = await fetchAnalyticsData();
      setData(result);
    };

    getAnalyticsData();
  }, []);

  return (
    <div>
      <h1>Analytics Page</h1>
      <h2>Risk Analysis Over Time</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="riskScore" stroke="#ff0000" />
      </LineChart>
    </div>
  );
}

export default Analytics;