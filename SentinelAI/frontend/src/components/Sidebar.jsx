import { Link } from "react-router-dom";
import "./Sidebar.css"; // Assuming you have a CSS file for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SentinelAI</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/alerts">Alerts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;