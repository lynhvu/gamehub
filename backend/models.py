from flask import Flask, Response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY
import os

# creating our Flask
api = Flask(__name__, static_folder="../build", static_url_path='/')
CORS(api)

# Not sure about this, but it was in the example
USER = "postgres"
PASSWORD = "abc"
PUBLIC_IP_ADDRESS = "localhost:5432"
DBNAME = "gamehubdb"


api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# needs to be fixed
#api.config['SQLALCHEMY_DATABASE_URI'] = \
os.environ.get("DB_STRING",f'postgresql://{USER}:{PASSWORD}@{PUBLIC_IP_ADDRESS}/{DBNAME}')
# this needs to be fixed still, just put in temp data vv

api.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:abc@localhost:5432/gamehubdb'

db = SQLAlchemy(api)

# company-games: one to many
# company-genre: many to one
# genre-games: one to many


# Company Model
class Company(db.Model):
    __tablename__ = 'company'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(200), nullable = False)
    description = db.Column(db.String(2000))
    location = db.Column(db.String(200))
    year = db.Column(db.String(50))  # changed this to string because igdb returns timestamps funny
    num_games = db.Column(db.Integer) # replacement for rating
    games = db.relationship('Game', backref='company')
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'))  # single main genre for that company
    img = db.Column(db.String(500))

    def __init__(self, id, name, description, location, year, num_games, games, genre_id, img):
        self.id = id
        self.name = name
        self.description = description
        self.location = location
        self.year = year
        self.num_games = num_games
        self.games = games
        self.genre_id = genre_id
        self.img = img

    
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# Game Model


class Game(db.Model):
    __tablename__ = 'game'
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(200), nullable = False)
    description = db.Column(db.String(2000))
    score = db.Column(db.Integer)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'))
    released = db.Column(db.String(50))
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    pictures = db.Column(ARRAY(db.String()))
    platforms = db.Column(ARRAY(db.String()))

    def __init__(self, id, name, description, score, genre_id, released, company_id, pictures, platforms):
        self.id = id
        self.name = name
        self.description = description
        self.score = score
        self.genre_id = genre_id
        self.released = released
        self. company_id = company_id
        self.pictures = pictures
        self.platforms = platforms


    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# Genre Model


class Genre(db.Model):
    __tablename__ = 'genre'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False)
    description = db.Column(db.String(2000))
    num_games = db.Column(db.Integer)
    games = db.relationship('Game', backref='genre')
    picture = db.Column(db.String(200), nullable = False)
    themes = db.Column(db.String(700))
    companies = db.relationship('Company', backref='genre')

    def __init__(self, id, name, description, num_games, games, picture, themes, companies):
        self.id = id
        self.name = name
        self.description = description
        self.num_games = num_games
        self.games = games
        self.picture = picture
        self.themes = themes
        self.companies = companies


    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}


db.create_all()
