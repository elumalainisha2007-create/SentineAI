import React from 'react';

function RiskMeter({ riskScore }) {
  const getRiskLevel = (score) => {
    if (score >= 80) return 'High Risk';
    if (score >= 50) return 'Medium Risk';
    return 'Low Risk';
  };

  const riskLevel = getRiskLevel(riskScore);

  return (
    <div className="risk-meter">
      <h2>Risk Meter</h2>
      <div className={`risk-level ${riskLevel.replace(' ', '-').toLowerCase()}`}>
        <p>{riskLevel}</p>
        <div className="meter">
          <div className="fill" style={{ width: `${riskScore}%` }}></div>
        </div>
        <p>{riskScore}%</p>
      </div>
    </div>
  );
}

export default RiskMeter;