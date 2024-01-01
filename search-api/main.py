from flask import Flask
from flask_cors import CORS

from routes.user import user_route
app = Flask(__name__)
CORS(app)
app.register_blueprint(user_route, url_prefix="/api/v1")
