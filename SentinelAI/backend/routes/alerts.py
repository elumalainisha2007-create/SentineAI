from flask import Blueprint, jsonify
from ..models.alert import Alert

alerts_bp = Blueprint('alerts', __name__)

@alerts_bp.route("/alerts", methods=["GET"])
def get_alerts():
    alerts = Alert.query.all()
    return jsonify([{
        "user": alert.user,
        "activity": alert.activity,
        "risk": alert.risk,
        "status": alert.status
    } for alert in alerts])