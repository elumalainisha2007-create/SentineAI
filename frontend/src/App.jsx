import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function App() {
  const alerts = [
    {
      user: "Admin01",
      action: "Downloaded 500 files",
      risk: "HIGH",
    },
    {
      user: "Employee12",
      action: "Midnight Login",
      risk: "MEDIUM",
    },
    {
      user: "Vendor09",
      action: "Accessed Restricted Folder",
      risk: "HIGH",
    },
  ];

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
      <h1>🛡 SentinelAI Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h2>120</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>7</h2>
          <p>Threats Today</p>
        </div>

        <div className="card">
          <h2>5</h2>
          <p>High Risk Users</p>
        </div>

        <div className="card">
          <h2>98%</h2>
          <p>System Secure</p>
        </div>
      </div>

      <div className="ai-box">
        <h2>🤖 AI Prediction</h2>
        <h3>Admin01 Risk Score : 92%</h3>
        <p>Midnight Login + Massive File Download Detected</p>
      </div>

      <h2>🚨 Live Alerts</h2>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Activity</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((a, i) => (
            <tr key={i}>
              <td>{a.user}</td>
              <td>{a.action}</td>
              <td>{a.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default App;