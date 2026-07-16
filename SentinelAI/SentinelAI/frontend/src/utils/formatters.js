function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatRiskScore(score) {
  if (score >= 90) {
    return 'HIGH';
  } else if (score >= 70) {
    return 'MEDIUM';
  } else {
    return 'LOW';
  }
}

function formatUserActivity(activity) {
  return activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase();
}

export { formatDate, formatRiskScore, formatUserActivity };