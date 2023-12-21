from flask import Flask

from routes.user import user_route
app = Flask(__name__)
app.register_blueprint(user_route, url_prefix="/api/v1")
