from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .models import User
from . import db, bcrypt

api = Blueprint("api", __name__, url_prefix="/api")

@api.route("/register", methods=["POST"])
def register():
    data = request.json
    hashed = bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    user = User(username=data["username"], password=hashed)
    db.session.add(user)
    db.session.commit()
    return jsonify(message="Registered successfully")

@api.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(username=data["username"]).first()
    if user and bcrypt.check_password_hash(user.password, data["password"]):
        token = create_access_token(identity={"id": user.id, "role": user.role})
        return jsonify(access_token=token, role=user.role)
    return jsonify(error="Invalid credentials"), 401

@api.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    identity = get_jwt_identity()
    user = User.query.get(identity["id"])
    return jsonify(username=user.username, role=user.role, paid=user.paid)

@api.route("/pay", methods=["POST"])
@jwt_required()
def pay():
    identity = get_jwt_identity()
    user = User.query.get(identity["id"])
    user.paid = True
    db.session.commit()
    return jsonify(message="Payment successful")