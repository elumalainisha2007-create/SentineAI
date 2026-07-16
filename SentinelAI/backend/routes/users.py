from flask import Blueprint, jsonify, request
from ..models.user import User
from ..utils.helpers import db_session

users_bp = Blueprint('users', __name__)

@users_bp.route('/users', methods=['GET'])
def get_users():
    session = db_session()
    users = session.query(User).all()
    return jsonify([user.to_dict() for user in users])

@users_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    session = db_session()
    user = session.query(User).filter(User.id == user_id).first()
    if user:
        return jsonify(user.to_dict())
    return jsonify({"error": "User not found"}), 404

@users_bp.route('/users', methods=['POST'])
def create_user():
    data = request.json
    new_user = User(username=data['username'], password=data['password'], roles=data.get('roles', []))
    session = db_session()
    session.add(new_user)
    session.commit()
    return jsonify(new_user.to_dict()), 201

@users_bp.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.json
    session = db_session()
    user = session.query(User).filter(User.id == user_id).first()
    if user:
        user.username = data.get('username', user.username)
        user.password = data.get('password', user.password)
        user.roles = data.get('roles', user.roles)
        session.commit()
        return jsonify(user.to_dict())
    return jsonify({"error": "User not found"}), 404

@users_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    session = db_session()
    user = session.query(User).filter(User.id == user_id).first()
    if user:
        session.delete(user)
        session.commit()
        return jsonify({"message": "User deleted"}), 204
    return jsonify({"error": "User not found"}), 404