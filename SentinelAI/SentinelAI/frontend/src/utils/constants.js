const API_BASE_URL = "http://localhost:5000"; // Base URL for the Flask API

const ALERTS_ENDPOINT = `${API_BASE_URL}/alerts`; // Endpoint for fetching alerts
const USERS_ENDPOINT = `${API_BASE_URL}/users`; // Endpoint for managing users
const ANALYTICS_ENDPOINT = `${API_BASE_URL}/analytics`; // Endpoint for risk analytics

const RISK_LEVELS = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

export { ALERTS_ENDPOINT, USERS_ENDPOINT, ANALYTICS_ENDPOINT, RISK_LEVELS };