from flask import Flask, Response
from flask import render_template, jsonify
from create_db import api, db, Company, Game, Genre
import subprocess


@api.route('/')
def index():
    """Index function for home page."""
    return "hellooooooo"


@api.route("/companies/", methods=["GET"])
def companies():
    """Companies function for transferring company data"""
    comp = Company.query.all()
    data = []
    for c in comp:
        data.append(c.as_dict())

    return jsonify(data)


@api.route("/companies/id:<int:id>/", methods=["GET"])
def company(id):
    """Company function for transferring single company data"""
    comp = Company.query.filter_by(id=id)
    data = []
    for c in comp:
        data.append(c.as_dict())

    return jsonify(data)


@api.route("/games/", methods=["GET"])
def games():
    """Games function for transferring game data"""
    game = Game.query.all()
    data = []
    for g in game:
        data.append(g.as_dict())
        
    return jsonify(data)


@api.route("/games/id:<int:id>/", methods=["GET"])
def game(id):
    """Game function for transferring single game data"""
    game = Game.query.filter_by(id=id)
    data = []
    for g in game:
        data.append(g.as_dict())

    return jsonify(data)


@api.route("/genres/", methods=["GET"])
def genres():
    genre = Genre.query.all()
    data = []
    for g in genre:
        data.append(g.as_dict())
        
    return jsonify(data)


@api.route("/genres/id:<int:id>/", methods=["GET"])
def genre(id):
    """Genre function for transferring single genre data"""
    genre = Genre.query.filter_by(id=id)
    data = []
    for g in genre:
        data.append(g.as_dict())

    return jsonify(data)

if __name__ == "__main__":
    api.run()