from flask import Blueprint, render_template, request, jsonify
from models.intellicite import IntelliCite
intellicite = IntelliCite()

user_route = Blueprint("user_route", __name__)

# Basic routes

# @user_route.route("/")
# def homepage():
#   return render_template("home.html")

# @user_route.route("/login")
# def homepage():
#   return render_template("login.html")

# @user_route.route("/")
# def homepage():
#   return render_template("register.html")

# user input routes　(POST)

@user_route.route("/process", methods=["POST"])
def process():
    user_input = request.json.get("user_input")
    if not user_input:
        return jsonify({
            "error": "Missing input"
        }), 400
    
    papers = intellicite.process(user_input)

    response = []
    for index, paper in enumerate(papers):
        response.append({
            "id": paper["id"],
            "title": paper["title"],
            "authors": paper["authors"],
            "doi": paper["doi"],
            "paper_index": index + 1,
            "abstract": paper["abstract"][:200],
            "highlights": paper["highlights"],
            # "sentiment": paper["sentiment"] 
        })

    return jsonify(response), 200