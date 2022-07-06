from flask import Flask, Response
from flask import render_template, jsonify
from create_db import api, db, Company, Game, Genre
import subprocess


@api.route('/')
def index():
    """Index function for home page."""
    return "hellooooooo"


@api.route("/companies/")
def companies():
    """Companies function for transferring company data"""
    comp = Company.query.all()
    ser = []
    for c in comp:
        ser.append(c.serialize())
        
    return render_template('company.html', comp = ser)


@api.route("/companies/id:<int:id>/")
def company(id):
    """Company function for transferring single company data"""
    comp = Company.query.filter_by(id=id)
    ser = []
    for c in comp:
        ser.append(c.serialize())

    return render_template('company.html', comp = ser)


@api.route("/games/")
def games():
    """Games function for transferring game data"""
    game = Game.query.all()
    ser = []
    for g in game:
        ser.append(g.serialize())
        
    return render_template('game.html', game = ser)


@api.route("/games/id:<int:id>/")
def game(id):
    """Game function for transferring single game data"""
    game = Game.query.filter_by(id=id)
    ser = []
    for g in game:
        ser.append(g.serialize())

    return render_template('game.html', game = ser)


@api.route("/genres/")
def genres():
    genre = Genre.query.all()
    ser = []
    for g in genre:
        ser.append(g.serialize())
        
    return render_template('genre.html', genre = ser)


@api.route("/genres/id:<int:id>/")
def genre(id):
    """Genre function for transferring single genre data"""
    genre = Genre.query.filter_by(id=id)
    ser = []
    for g in genre:
        ser.append(g.serialize())

    return render_template('genre.html', genre = ser)


if __name__ == "__main__":
    api.run()