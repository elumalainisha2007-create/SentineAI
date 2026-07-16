from flask import Blueprint

# Initialize the routes blueprint
routes_bp = Blueprint('routes', __name__)

from .auth import *
from .alerts import *
from .users import *
from .analytics import *