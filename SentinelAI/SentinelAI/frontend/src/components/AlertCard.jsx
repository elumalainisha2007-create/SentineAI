import React from 'react';

function AlertCard({ alert }) {
  return (
    <div className="alert-card">
      <h3>{alert.user}</h3>
      <p>Activity: {alert.activity}</p>
      <p>Risk Level: {alert.risk}</p>
    </div>
  );
}

export default AlertCard;