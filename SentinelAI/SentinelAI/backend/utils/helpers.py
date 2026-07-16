def generate_alert_id():
    import uuid
    return str(uuid.uuid4())

def format_alert_data(alert):
    return {
        "user": alert.get("user"),
        "activity": alert.get("activity"),
        "risk": alert.get("risk"),
        "id": generate_alert_id()
    }

def log_audit_action(action, user):
    from datetime import datetime
    return {
        "timestamp": datetime.now().isoformat(),
        "action": action,
        "user": user
    }