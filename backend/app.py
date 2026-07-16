from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/alerts")
def alerts():
    return jsonify([
        {
            "user":"Admin01",
            "activity":"Downloaded 500 Files",
            "risk":92
        },
        {
            "user":"Employee12",
            "activity":"Midnight Login",
            "risk":81
        },
        {
            "user":"Vendor09",
            "activity":"Restricted Folder Access",
            "risk":76
        }
    ])

app.run(debug=True)