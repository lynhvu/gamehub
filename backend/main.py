from flask import Flask, Response
from flask import render_template, jsonify
from create_db import api, db, Company, Game, Genre
import subprocess

@api.route('/')
def index():
    """Index function for home page."""
    return "hellooooooo"


@api.route("/compdata/")
def companies():
    """Companies function for transferring company data"""
    data = db.session.query(Company).all() # does this work?
    return Response(data)


@api.route("/gamedata/")
def games():
    """Games function for transferring game data"""
    data = json.dumps(gamesData)
    return Response(data)


@api.route("/genresdata/")
def genres():
    """Genres function for transferring genre data"""
    data = json.dumps(genresData)
    return Response(data)


if __name__ == "__main__":
    api.run()