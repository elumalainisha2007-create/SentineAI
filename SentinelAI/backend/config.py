from pathlib import Path
import os

class Config:
    DEBUG = True
    TESTING = False
    DATABASE_URI = 'sqlite:///database.db'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a_random_secret_key'
    CORS_HEADERS = 'Content-Type'