from datetime import datetime

def detect_threats(user_activity):
    threats = []
    
    for activity in user_activity:
        risk_score = calculate_risk(activity)
        
        if risk_score > 75:  # Threshold for high risk
            threats.append({
                "user": activity["user"],
                "activity": activity["action"],
                "risk": risk_score,
                "timestamp": datetime.now().isoformat()
            })
    
    return threats

def calculate_risk(activity):
    risk_factors = {
        "Downloaded 500 Files": 90,
        "Midnight Login": 80,
        "Accessed Restricted Folder": 85,
        "Unusual IP Address": 70,
        "Multiple Failed Logins": 75
    }
    
    return risk_factors.get(activity["action"], 50)  # Default risk score if action not found

def log_threats(threats):
    for threat in threats:
        # Here you would typically log the threat to a database or monitoring system
        print(f"Threat detected: {threat}")