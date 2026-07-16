from flask import Flask
from flask_cors import CORS
from routes import auth, alerts, users, analytics
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Registering the routes
app.register_blueprint(auth.bp)
app.register_blueprint(alerts.bp)
app.register_blueprint(users.bp)
app.register_blueprint(analytics.bp)

if __name__ == "__main__":
    app.run(debug=True)