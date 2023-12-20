# from models.intellicite import IntelliCite
from flask import Flask
# intellicite = IntelliCite()

from routes.user import user_route
app = Flask(__name__)
app.register_blueprint(user_route, url_prefix="/api/v1")

# result = intellicite.process("sleep deprivation and its effects on human memory")

# for index, paper in enumerate(result):
#     print(f"RESULT {index+1}:")
#     print(f"ABSTRACT: {paper['abstract'][:200]}")
#     print(f"HIGHLIGHTS: {paper['highlights']}")
#     print(f"SENTIMENT: {paper['sentiment']}")
#     print("--------------------------------------------------")

