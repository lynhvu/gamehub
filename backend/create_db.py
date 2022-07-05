import json
from models import api, db, Company, Game, Genre
import requests
from datetime import datetime
import country_converter as coco


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

    # loop through RAWG
    company = requests.get("https://api.rawg.io/api/developers?key=1266974d1b554edc9e9236367db40ea8").json()
    idCount = 0
    for oneCompany in company['results']:
        oneCompany = requests.get("https://api.rawg.io/api/developers/" + str(oneCompany['id']) + "?key=1266974d1b554edc9e9236367db40ea8").json()
        id = idCount
        name = oneCompany['name']
        description = oneCompany['description']
        location = "Not Available" # igdb
        year = "Not Available" # igdb
        rating = oneCompany[]  # replace, not available in any api
        num_games = oneCompany['games_count']  # replacement for rating
        img = oneCompany['image_background']  # note that this gets a sample image rather than the logo (the logo is harder to obtain)
        # games are already added in create_games()
        # main genre
        newCompany = Company(id = id, name = name, description = description, location = location, year = year, rating = rating, games = games)
        db.session.add(newCompany)
        db.session.commit()
        idCount += 1

    # loop through igdb, looking for matches and filling in the extra info
    cc = coco.CountryConverter()
    company = requests.post("https://api.igdb.com/v4/companies?fields=*&limit=500", headers={"Client-ID":"3pcjj9vwob1xykuyvdt2q10vezorwh", "Authorization": "Bearer wdekgrbhajef4dvskjfjiyjwa4l0sp"})
    for oneCompany in company['results']:
        matchingCompany = Session.query(Company).filter_by(name=oneCompany['name']).one()
        if matchingCompany is not None:
            try:
                matchingCompany.location = cc.convert(names=oneCompany['country'], to = 'name_short')
            except KeyError:
                pass
            try:
                matchingCompany.year = datetime.utcfromtimestamp(oneCompany['start_date']).strftime('%Y-%m-%d %H:%M:%S')[:4]
            except KeyError:
                pass
        

        
        
		

    
        

# ------------
# create_genres
# ------------
def create_genres():
    """
    populate genre table
    """
    genre = requests.get("https://api.rawg.io/api/genres?key=1266974d1b554edc9e9236367db40ea8").json()
    i = 0

    for oneGenre in genre['results']:
        oneGenre = requests.get("https://api.rawg.io/api/genres/" + str(oneGenre['id']) + "?key=1266974d1b554edc9e9236367db40ea8").json()
        id = i
        name = oneGenre['name']
        description = oneGenre['description']
        num_games = oneGenre['games_count']
        games = oneGenre[]
		
        newGenre = Genre(id = id, name = name, description = description, num_games = num_games, games = games)
        
        db.session.add(newGenre)
        db.session.commit()
        i += 1


# ------------
# create_games
# ------------
def create_games():
    """
    populate games table
    """
    # get 200 games from page 1
    game = requests.get("https://api.rawg.io/api/games?key=1266974d1b554edc9e9236367db40ea8&page=1&page_size=200").json()
    idCount = 0
    for oneGame in game['results']:
        oneGame = requests.get("https://api.rawg.io/api/games/" + str(oneGame['id']) + "?key=1266974d1b554edc9e9236367db40ea8&page=1&page_size=200").json()
        id = idCount
        name = oneGame['name']
        description = oneGame['description']
        score = oneGame['metacritic']
        genre_id = Session.query(Genre).filter_by(name=oneGame['genres'][0]['name']).one().id    # single genre, one to many
        released = oneGame['released']
        company_id = Session.query(Company).filter_by(name=oneGame['developers'][0]['name']).one().id # single company that matches name, one to many
        # get list of picture URLs
        pictures = []
        imageList = requests.get("https://api.rawg.io/api/games/" + str(id) + "/screenshots?key=1266974d1b554edc9e9236367db40ea8").json()['results']
        for i in imageList:
            pictures.append(i['image'])
        
        # get list of platform names
        platforms = []
        for p in oneGame['platforms']:
            platforms.append(p['platform']['name'])
        
        # trailer is hard to get, maybe just use more pictures?
        newGame = Game(id = id, name = name, description = description, score = score, genre_id = genre_id, released = released, company_id = company_id, pictures = pictures, platforms = platforms)
        
        db.session.add(newGame)
        db.session.commit()
        i += 1
#db.drop_all()
#db.create_all()





create_companies()
create_genres()
