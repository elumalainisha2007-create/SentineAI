from flask import Blueprint, jsonify
from ..services.risk_analyzer import analyze_risk

analytics_bp = Blueprint('analytics', __name__)

@analytics_bp.route("/risk-analysis", methods=["GET"])
def risk_analysis():
    # Call the risk analyzer service to get risk data
    risk_data = analyze_risk()
    return jsonify(risk_data)

@analytics_bp.route("/overall-risk", methods=["GET"])
def overall_risk():
    # Logic to calculate overall risk can be added here
    overall_risk_value = 75  # Placeholder value
    return jsonify({"overall_risk": overall_risk_value})