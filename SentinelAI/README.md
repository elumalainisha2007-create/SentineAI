# SentinelAI – AI-Powered Insider Threat Detection and Risk-Based Authentication System for Banking Environments

## Overview
SentinelAI is a web application designed to enhance security in banking environments by detecting insider threats and providing risk-based authentication. Utilizing AI algorithms, it analyzes user behavior and activities to identify potential risks and alerts administrators in real-time.

## Features
- **User Authentication**: Secure login and session management for users.
- **Alert System**: Real-time alerts for suspicious activities.
- **Risk Analysis**: Comprehensive risk assessment based on user actions.
- **User Management**: Admin interface for managing users and their roles.
- **Analytics Dashboard**: Visual representation of user statistics and risk metrics.

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: Flask, SQLite
- **Styling**: CSS

## Project Structure
```
SentinelAI
├── backend
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   ├── models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── alert.py
│   │   └── audit_log.py
│   ├── routes
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── alerts.py
│   │   ├── users.py
│   │   └── analytics.py
│   ├── services
│   │   ├── __init__.py
│   │   ├── threat_detection.py
│   │   ├── risk_analyzer.py
│   │   └── authentication.py
│   ├── utils
│   │   ├── __init__.py
│   │   └── helpers.py
│   └── database.db
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Alerts.jsx
│   │   │   ├── Users.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── Settings.jsx
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── AlertCard.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── ActivityTable.jsx
│   │   │   ├── RiskMeter.jsx
│   │   │   ├── UserProfile.jsx
│   │   │   └── Modal.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   ├── hooks
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   └── utils
│   │       ├── constants.js
│   │       └── formatters.js
│   ├── package.json
│   └── vite.config.js
├── .vscode
│   └── launch.json
├── .gitignore
└── README.md
```

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/SentinelAI.git
   cd SentinelAI
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install the required packages:
     ```
     pip install -r requirements.txt
     ```
   - Run the Flask application:
     ```
     python app.py
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Install the required packages:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm run dev
     ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.