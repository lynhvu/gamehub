import json
from models import api, db, Company, Game, Genre
import requests


# NOTE: this is literally just copied an pasted from the example, edits are needed

# ------------
# load_json
# save data in a json file after scraping it from the APIs
# ------------
def load_json(filename):
    """
    return a python dict jsn
    filename a json file
    """
    with open(filename) as file:
        jsn = json.load(file)
        file.close()

    return jsn

# ------------
# create_companies
# ------------
def create_companies():
    """
    populate company table
    """
    company = requests.get("https://api.rawg.io/api/developers?key=1266974d1b554edc9e9236367db40ea8").json()

    for oneCompany in company['results']:
        id = company['results']['id']
        name = company['results']['name']
        description = company['results'][]
        location = company['results'][]
        year = company['results'][]
        rating = company['results'][]
        games = company['results'][]
		
        newCompany = Company(id = id, name = name, description = description, location = location, year = year, rating = rating, games = games)
        
        db.session.add(newCompany)
        db.session.commit()
        

# ------------
# create_games
# ------------
def create_games():
    """
    populate games table
    """
    # get 200 games from page 1
    game = requests.get("https://api.rawg.io/api/games?key=1266974d1b554edc9e9236367db40ea8&page=1&page_size=200").json()

    for oneGame in game['results']:
        oneGame = requests.get("https://api.rawg.io/api/games/" + str(oneGame['id']) + "?key=1266974d1b554edc9e9236367db40ea8&page=1&page_size=200").json()
        id = oneGame['id']
        name = oneGame['name']
        description = oneGame['description']
        score = oneGame['metacritic']
        genre_id = oneGame[]
        released = oneGame['released']
        company_id = oneGame[]
        pictures = []
        imageList = requests.get("https://api.rawg.io/api/games/" + str(id) + "/screenshots?key=1266974d1b554edc9e9236367db40ea8").json()['results']
        for i in imageList:
            pictures.append(i['image'])
        
        # trailer is hard to get, maybe just use more pictures?
        newGame = Game(id = id, name = name, description = description, location = location, year = year, rating = rating, games = games, pictures = pictures)
        
        db.session.add(newGame)
        db.session.commit()
#db.drop_all()
#db.create_all()

create_companies()

