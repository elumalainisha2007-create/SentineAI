from flask import jsonify

def analyze_risk(user_activity):
    risk_score = 0

    # Example criteria for risk assessment
    if user_activity['activity'] == "Downloaded 500 Files":
        risk_score += 50
    if user_activity['activity'] == "Midnight Login":
        risk_score += 30
    if user_activity['activity'] == "Restricted Folder Access":
        risk_score += 40

    # Additional criteria can be added here

    return {
        "user": user_activity['user'],
        "risk_score": risk_score,
        "risk_level": determine_risk_level(risk_score)
    }

def determine_risk_level(score):
    if score >= 80:
        return "HIGH"
    elif score >= 50:
        return "MEDIUM"
    else:
        return "LOW"